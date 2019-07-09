import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

export default ({ data, location }) => (
  <Layout location={location} title={data.site.siteMetadata.title}>
    <h1>Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
