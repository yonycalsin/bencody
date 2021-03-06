/* eslint "no-console": "off" */

const path = require('path');
const _ = require('lodash');
const moment = require('moment');
const siteConfig = require('./data/site-config.ts');
const dataSource = require('./data/data-source.ts');

const { languages } = dataSource;

exports.onCreateNode = ({ node, actions, getNode }) => {
   const { createNodeField } = actions;

   let slug;

   if (node.internal.type === 'MarkdownRemark') {
      const fileNode = getNode(node.parent);

      const parsedFilePath = path.parse(fileNode.relativePath);

      if (
         Object.prototype.hasOwnProperty.call(node, 'frontmatter') &&
         Object.prototype.hasOwnProperty.call(node.frontmatter, 'title')
      ) {
         slug = `/${_.kebabCase(node.frontmatter.title)}`;
      } else if (parsedFilePath.name !== 'index' && parsedFilePath.dir !== '') {
         slug = `/${parsedFilePath.dir}/${parsedFilePath.name}/`;
      } else if (parsedFilePath.dir === '') {
         slug = `/${parsedFilePath.name}/`;
      } else {
         slug = `/${parsedFilePath.dir}/`;
      }

      if (Object.prototype.hasOwnProperty.call(node, 'frontmatter')) {
         if (Object.prototype.hasOwnProperty.call(node.frontmatter, 'slug'))
            slug = `/${_.kebabCase(node.frontmatter.slug)}`;

         if (Object.prototype.hasOwnProperty.call(node.frontmatter, 'date')) {
            const date = moment(
               node.frontmatter.date,
               siteConfig.dateFromFormat,
            );

            if (!date.isValid) {
               console.warn(`WARNING: Invalid date.`, node.frontmatter);
            }

            createNodeField({ node, name: 'date', value: date.toISOString() });
         }
      }

      createNodeField({ node, name: 'slug', value: slug });
   }
};

exports.createPages = async ({ graphql, actions }) => {
   const { createPage } = actions;

   const postPage = path.resolve('src/templates/post.tsx');

   const tagPage = path.resolve('src/templates/tag.tsx');

   const categoryPage = path.resolve('src/templates/category.tsx');

   const homePage = path.resolve('./src/templates/home/index.tsx');

   const landingPage = path.resolve('./src/templates/landing.tsx');

   // Get a full list of markdown posts
   const markdownQueryResult = await graphql(`
      {
         allMarkdownRemark {
            edges {
               node {
                  fields {
                     slug
                  }
                  frontmatter {
                     title
                     tags
                     category
                     date
                  }
               }
            }
         }
      }
   `);

   if (markdownQueryResult.errors) {
      console.error(markdownQueryResult.errors);

      throw markdownQueryResult.errors;
   }

   const tagSet = new Set();

   const categorySet = new Set();

   const librarySet = new Set();

   const postsEdges = markdownQueryResult.data.allMarkdownRemark.edges;

   // Sort posts
   postsEdges.sort((postA, postB) => {
      const dateA = moment(
         postA.node.frontmatter.date,
         siteConfig.dateFromFormat,
      );

      const dateB = moment(
         postB.node.frontmatter.date,
         siteConfig.dateFromFormat,
      );

      if (dateA.isBefore(dateB)) return 1;

      if (dateB.isBefore(dateA)) return -1;

      return 0;
   });

   // Paging
   const { postsPerPage } = siteConfig;

   if (postsPerPage) {
      const pageCount = Math.ceil(postsEdges.length / postsPerPage);

      [...Array(pageCount)].forEach((_val, pageNum) => {
         createPage({
            path: pageNum === 0 ? `/` : `/${pageNum + 1}/`,
            component: homePage,
            context: {
               limit: postsPerPage,
               skip: pageNum * postsPerPage,
               pageCount,
               currentPageNum: pageNum + 1,
            },
         });
      });
   } else {
      // Load the landing page instead
      createPage({
         path: `/`,
         component: landingPage,
      });
   }

   // Post page creating
   postsEdges.forEach((edge, index) => {
      // Generate a list of tags
      if (edge.node.frontmatter.tags) {
         edge.node.frontmatter.tags.forEach((tag) => {
            tagSet.add(tag);
         });
      }

      // Generate a list of categories
      if (edge.node.frontmatter.category) {
         categorySet.add(edge.node.frontmatter.category);
      }

      // Create post pages
      const nextID = index + 1 < postsEdges.length ? index + 1 : 0;

      const prevID = index - 1 >= 0 ? index - 1 : postsEdges.length - 1;

      const nextEdge = postsEdges[nextID];

      const prevEdge = postsEdges[prevID];

      createPage({
         path: edge.node.fields.slug,
         component: postPage,
         context: {
            slug: edge.node.fields.slug,
            nexttitle: nextEdge.node.frontmatter.title,
            nextslug: nextEdge.node.fields.slug,
            prevtitle: prevEdge.node.frontmatter.title,
            prevslug: prevEdge.node.fields.slug,
         },
      });
   });

   //  Create tag pages
   tagSet.forEach((tag) => {
      createPage({
         path: `/tags/${_.kebabCase(tag)}/`,
         component: tagPage,
         context: {
            tag,
         },
      });
   });

   // Create category pages
   categorySet.forEach((category) => {
      createPage({
         path: `/categories/${_.kebabCase(category)}/`,
         component: categoryPage,
         context: { category },
      });
   });

   // Programing Languages - Pages
   languages.forEach((language) => {
      const { slug, title, libraries } = language;

      let siteTitle = `${title} Libraries`;

      if (_.isEmpty(libraries)) {
         siteTitle = `${title} Language`;
      }

      if (_.isArray(libraries)) {
         libraries.forEach((library) => {
            librarySet.add({
               ...library,
               language,
            });
         });
      }

      createPage({
         path: `/language/${slug}`,
         component: homePage,
         context: {
            language: slug,
            featured: {
               title: siteTitle,
               dataSource: libraries,
            },
         },
      });
   });

   // Libraries
   librarySet.forEach((library) => {
      const { language, slug, title } = library;

      createPage({
         path: `/language/${language.slug}/library/${slug}`,
         component: homePage,
         context: {
            // Variables
            language: language.slug,
            library: slug,

            featured: {
               title: `${language.title} - ${title}`,
               dataSource: [],
            },
         },
      });
   });
};
