import React from "react"
import styled from "styled-components"

import Layout from "./layout"
import Footer from "./footer"
import { rhythm } from "../utils/typography"
import { colors } from "../utils/theme"

const Styled = styled.div`
  h1 {
    margin-bottom: ${rhythm(1 / 2)};
  }

  h1,
  h2,
  h3 {
    color: ${colors.secondary};
    font-family: Merriweather;
  }

  small {
    display: block;
    margin-bottom: ${rhythm(1)};
  }

  a {
    color: ${colors.primary};
    :hover {
      text-decoration: underline;
    }
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
