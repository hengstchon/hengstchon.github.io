import React, { Fragment } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "./layout"
import { colors } from "../utils/theme"

const StyledLink = styled(Link)`
  color: ${colors.primary};
  :hover {
    text-decoration: none;
    border-bottom: 1px solid ${colors.primary};
    padding-bottom: 2px;
  }
`

const Styled = styled.div`
  h3 {
    margin-bottom: 0.5rem;
  }

  small {
    margin-bottom: 0.6rem;
  }
`

export default ({ location, posts, siteTitle }) => (
  <Layout location={location} title={siteTitle}>
    {posts.map(({ node }) => (
      <Fragment key={node.fields.slug}>
        <Styled>
          <h3>
            <StyledLink to={node.fields.slug}>
              {node.frontmatter.title || node.fields.slug}
            </StyledLink>
          </h3>
          <small>{node.frontmatter.date}</small>
          <p>{node.excerpt}</p>
        </Styled>
      </Fragment>
    ))}
  </Layout>
)
