import Typography from "typography"

const typography = new Typography({
  baseFontSize: "16px",
  baseLineHeight: 1.8,
  headerFontFamily: ["-apple-system", "serif"],
  bodyFontFamily: ["-apple-system", "sans-serif"],
  scaleRatio: 2,
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
