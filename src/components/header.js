import React, { Fragment } from "react"
import { Link } from "gatsby"
import styled, { keyframes } from "styled-components"

import { rhythm } from "../utils/typography"
import { colors } from "../utils/theme"

const Mark = styled.span`
  margin-right: 0.3em;
  color: ${colors.text};
`

const StyledLink = styled(Link)`
  color: ${colors.text};
  :hover {
    text-decoration: none;
  }
`
const cursor = keyframes`
  0% { opacity: 0; }
  50% { opacity: 1; }
  100% { opacity: 0; }
`

const Cursor = styled.span`
  display: inline-block;
  width: 0.3em;
  height: 1em;
  background: ${colors.primary};
  margin-left: 0.3em;
  margin-bottom: -0.2em;
  border-radius: 1px;
  animation: ${cursor} 1.5s infinite;
`

const IndexHeader = styled.h1`
  margin-bottom: ${rhythm(2)};
`

const PostHeader = styled.h3`
  margin-bottom: ${rhythm(1.5)};
`

const Title = ({ title }) => (
  <Fragment>
    <Mark>></Mark>
    <StyledLink>{title}</StyledLink>
    <Cursor />
  </Fragment>
)

const rootPath = `${__PATH_PREFIX__}/`

export default ({ title, location }) =>
  location.pathname === rootPath ? (
    <IndexHeader>
      <Title title={title} />
    </IndexHeader>
  ) : (
    <PostHeader>
      <Title title={title} />
    </PostHeader>
  )
