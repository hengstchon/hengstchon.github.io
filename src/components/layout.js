import React, { Fragment } from "react"
import styled from "styled-components"

import Header from "./header"
import { GlobalStyle } from "../utils/globalStyle"
import { rhythm } from "../utils/typography"
import { sizes } from "../utils/theme"

const Layout = styled.div`
  max-width: ${sizes.container};
  margin: 0 auto;
  padding: ${rhythm(1.5)} ${rhythm(3 / 4)};
`

export default ({ children, ...props }) => {
  return (
    <Fragment>
      <GlobalStyle />
      <Layout>
        <Header {...props} />
        <main>{children}</main>
      </Layout>
    </Fragment>
  )
}
