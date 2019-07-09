import React, { Fragment } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "./layout"
import { rhythm } from "../utils/typography"
import { colors } from "../utils/theme"

const StyledLink = styled(Link)`
  color: ${colors.secondary};
  :hover {
    color: ${colors.primary};
  }
`

const Styled = styled.div`
  h2 {
    margin-bottom: ${rhythm(1 / 4)};
  }

  small {
    display: block;
    margin-bottom: ${rhythm(0.5)};
  }

  p {
    line-height: 1.6;
  }
`

export default ({ location, posts, siteTitle }) => (
  <Layout location={location} title={siteTitle}>
    {posts.map(({ node }) => (
      <Fragment key={node.fields.slug}>
        <Styled>
          <h2>
            <StyledLink to={node.fields.slug}>
              {node.frontmatter.title || node.fields.slug}
            </StyledLink>
          </h2>
          <small>{node.frontmatter.date}</small>
          <p>{node.excerpt}</p>
        </Styled>
      </Fragment>
    ))}
  </Layout>
)
