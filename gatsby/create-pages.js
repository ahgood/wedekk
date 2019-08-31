"use strict";

const path = require("path");
const _ = require("lodash");

const createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // 404
  createPage({
    path: "/404",
    component: path.resolve("./src/templates/not-found-template.js")
  });

  // Posts and pages from markdown // allMarkdownRemark(filter: { frontmatter: { draft: { ne: true } } }) {
  const result = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              template
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  const { edges } = result.data.allMarkdownRemark;

  _.each(edges, edge => {
    if (edge.node.fields.slug === "/pages/home/") {
      createPage({
        path: "/",
        component: path.resolve("./src/templates/page-template.js"),
        context: { slug: edge.node.fields.slug }
      });
    } else if (_.get(edge, "node.frontmatter.template") === "page") {
      createPage({
        path: edge.node.fields.slug,
        component: path.resolve("./src/templates/page-template.js"),
        context: { slug: edge.node.fields.slug }
      });
    }
  });
};

module.exports = createPages;
