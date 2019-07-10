import { createGlobalStyle } from "styled-components"
import { rhythm } from "../utils/typography"
import { colors, fonts } from "./theme"

export const GlobalStyle = createGlobalStyle`
  body {
    background: ${colors.background};
    color: ${colors.text};
    font-family: system-ui, sans-serif;
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
    display: block;
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

  h1 {
    margin: 0 0 0.5em 0;
    color: ${colors.secondary};
  }

  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 1em 0 0.5em 0;
    color: ${colors.secondary};
  }
`
