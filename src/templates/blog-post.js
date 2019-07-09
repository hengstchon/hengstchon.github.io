import React from "react"
import { graphql } from "gatsby"
import Post from "../components/post"

export default ({ data, pageContext: { previous, next }, location }) => (
  <Post data={data} previous={previous} next={next} location={location} />
)

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
      fields {
        slug
      }
    }
  }
`
