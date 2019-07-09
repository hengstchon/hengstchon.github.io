import Typography from "typography"


const typography = new Typography({
  baseFontSize: "16px",
  baseLineHeight: 1.8,
  headerFontFamily: [
    "Merriweather",
    "-apple-system",
    "serif",
  ],
  bodyFontFamily: [
    "-apple-system",
    "sans-serif",
  ],
  googleFonts: [{ name: 'Merriweather', styles: [400, 700] }],
  scaleRatio: 2,
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
