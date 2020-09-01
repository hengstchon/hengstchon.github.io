import React, { Fragment } from "react"
import { Link } from "gatsby"
import styled, { keyframes } from "styled-components"

import { rhythm } from "../utils/typography"
import { colors } from "../utils/theme"

const Mark = styled.span`
  margin-right: 0.3em;
  color: ${colors.primary};
`

const StyledLink = styled(Link)`
  color: ${colors.primary};
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
  background: ${colors.secondary};
  margin-left: 0.3em;
  margin-bottom: -0.2em;
  border-radius: 1px;
  animation: ${cursor} 1.5s infinite;
`

const Header = styled.h1`
  margin-bottom: ${rhythm(2)};
`

const Title = ({ title }) => (
  <Fragment>
    <Mark>&gt;</Mark>
    <StyledLink to="/">{title}</StyledLink>
    <Cursor />
  </Fragment>
)

export default ({ title }) => (
  <Header>
    <Title title={title} />
  </Header>
)
