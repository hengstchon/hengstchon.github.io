import { createGlobalStyle } from "styled-components"
import { rhythm } from "../utils/typography"
import { colors, fonts } from "./theme"

export const GlobalStyle = createGlobalStyle`
  body {
    background: ${colors.background};
    color: ${colors.text};
  }

  a {
    text-decoration: none;
  }

  blockquote {
    border-left: 4px solid ${colors.muted};
    padding-left: ${rhythm(1)};
    opacity: 0.6;
  }

  small {
    font-family: ${fonts.small};
  }

  hr {
    background: ${colors.muted};
  }

  th, td {
    padding-bottom: ${rhythm(0.3)};
    padding-top: ${rhythm(0.3)};
  }

  pre {
    margin-bottom: ${rhythm(10)}
  }
`
