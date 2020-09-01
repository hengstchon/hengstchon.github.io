import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { rhythm } from "../utils/typography"
import { colors } from "../utils/theme"

const Styled = styled.div`
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    list-style: none;
    margin-left: 0;
    padding: 0 ${rhythm(0.2)};
  }
`

const StyledLink = styled(Link)`
  color: ${colors.secondary} !important;
  text-decoration: none;

  :hover {
    text-decoration: none;
    border-bottom: 1px solid ${colors.secondary} !important;
    padding-bottom: 2px;
  }
`

export default ({ previous, next }) => (
  <Styled>
    <ul>
      <li>
        {previous && (
          <StyledLink to={previous.fields.slug} rel="prev">
            ← {previous.frontmatter.title || next.fields.slug}
          </StyledLink>
        )}
      </li>
      <li>
        {next && (
          <StyledLink to={next.fields.slug} rel="next">
            {next.frontmatter.title || next.fields.slug} →
          </StyledLink>
        )}
      </li>
    </ul>
  </Styled>
)
