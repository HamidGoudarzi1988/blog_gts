import React from "react"
import PrimaryLayouts from "../layouts/PrimaryLayouts"
import Post from "../components/Post"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"

export default ({ data }) => {
  return (
    <PrimaryLayouts xs="12" md="8">
{/*
      <Helmet>
        <title>Gatsby-Hamid-Goudarzi</title>
        <meta
          name="description"
          content="This is the description of my web site"
        />
        <meta name="keywords" content="gatsby, gatsbyjs, gatsby bootstrap" />
        <meta name="robot" content="index,follow" />
      </Helmet>
*/}
      {data.allMarkdownRemark.nodes.map((node, idx) => (
        <Post
          title={node.frontmatter.title}
          image={node.frontmatter.image}
          excerpt={node.excerpt}
          readMore={node.fields.slug}
        />
      ))}
    </PrimaryLayouts>
  )
}

export const query = graphql`
  {
    allMarkdownRemark {
      nodes {
        frontmatter {
          title
          date
          keywords
          image
        }
        html
        excerpt
        fields {
          slug
        }
      }
    }
  }
`
