import React from "react"
import PrimaryLayouts from "../layouts/PrimaryLayouts"
import Post from "../components/Post"
import { graphql } from "gatsby"
export default ({ data }) => {
  return (
    <PrimaryLayouts xs="12" md="8">
      {data.allMarkdownRemark.nodes.map((node, idx) => (
        <Post
          title={node.frontmatter.title}
          image={node.frontmatter.image}
          excerpt={node.excerpt}
          readMore = {node.fields.slug}
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
        fields{
          slug
        }
      }
    }
  }
`
