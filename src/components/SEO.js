import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"
const SEO = ({ title, description, keywords, image }) => {
  return (
    <StaticQuery
      query={query}
      render={({
        site: {
          siteMetadata: {
            defaultTitle,
            defaultDescription,
            defaultImage,
            defaultKeywords,
            url,
          },
        },
      }) => {
        const seo = {
          title: title || defaultTitle,
          description: description || defaultDescription,
          image: `${url}${image || defaultImage}`,
          keywords: keywords || defaultKeywords,
        }
        return (
          <Helmet>
            <title>{seo.title}</title>
            <meta name="description" content={seo.description} />
            <meta name="image" content={seo.image} />
            <meta name="keywords" content={seo.keywords} />
            <meta name="robot" content="index,follow" />
            <meta lang="en" />
          </Helmet>
        )
      }}
    />
  )
}

export default SEO

export const query = graphql`
  {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        defaultKeywords: keywords
        defaultImage: image
        url
      }
    }
  }
`
