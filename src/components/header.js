import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { rhythm } from "../utils/typography"
import { colors } from "../utils/theme"

const IndexHeader = styled.h1`
  margin-bottom: ${rhythm(2)};
`

const PostHeader = styled.h3`
  margin-bottom: ${rhythm(1.5)};
`
const StyledLink = styled(Link)`
  color: ${colors.primary};
  :hover {
    text-decoration: none;
  }
`

const rootPath = `${__PATH_PREFIX__}/`

export default ({ title, location }) =>
  location.pathname === rootPath ? (
    <IndexHeader>
      <StyledLink>{title}</StyledLink>
    </IndexHeader>
  ) : (
    <PostHeader>
      <StyledLink>{title}</StyledLink>
    </PostHeader>
  )
