import React from "react"
import { Row } from "react-bootstrap"
import Footer from "../components/footer/Footer"
import Header from "../components/header/Header"
import { graphql } from "gatsby"
import SEO from "../components/SEO"

const BlogPostLayouts = ({ data }) => {
  const post = data.markdownRemark
  return (
    <div>
    <SEO
    title={post.frontmatter.title}
    description={post.excerpt}
    
    />
      <Header />
      <div className="container">
        <Row className="justify-content-md-center">
          <h1>{post.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </Row>
      </div>
      <Footer />
    </div>
  )
}

export default BlogPostLayouts

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
