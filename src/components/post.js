import React from "react"
import styled from "styled-components"

import Layout from "./layout"
import Footer from "./footer"
import { rhythm } from "../utils/typography"
import { colors } from "../utils/theme"

const Styled = styled.div`
  a {
    color: ${colors.primary};
    :hover {
      text-decoration: underline;
    }
  }

  small {
    margin-bottom: ${rhythm(1)}
  }
`

export default ({ data, previous, next, location }) => {
  const post = data.markdownRemark
  const title = data.site.siteMetadata.title
  return (
    <Layout location={location} title={title}>
      <Styled>
        <h1>{post.frontmatter.title || post.fields.slug}</h1>
        <small>{post.frontmatter.date}</small>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />

        <hr />
        <Footer previous={previous} next={next} />
      </Styled>
    </Layout>
  )
}
