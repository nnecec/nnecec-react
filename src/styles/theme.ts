import * as palx from 'palx'

const red = '#e42d42'
const blue = '#2d9ce4'
export const palette = palx(blue)

export const grays = {
  darker: '#121217',
  dark: '#17171d',
  black: palette.black,
  slate: palette.gray[8],
  silver: palette.gray[7],
  smoke: palette.gray[2],
  snow: palette.gray[0],
  white: '#ffffff'
}

export const brand = {
  primary: red,
  accent: palette.indigo[4],
  success: palette.teal[5],
  info: palette.blue[5],
  warning: palette.orange[5],
  error: palette.red[7],
  muted: grays.silver
}

export const colors = {
  ...brand,
  ...grays,
  ...palette
}
export const space = [0, 4, 8, 16, 32, 64, 128, 256, 512]

const emoji = '"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"'
export const font = `Averta,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif,${emoji}`
export const mono = 'SFMono-Regular,"Roboto Mono",Menlo,monospace'

export const fontSizes = [12, 14, 16, 20, 24, 32, 48, 64, 72, 96]

export const scaleFactor = 17 / 16
export const transition = `${3 / 16}s cubic-bezier(0.375, 0, 0.675, 1)`

export const shadowColor = 'rgba(0,0,0,0.16)'
export const baseShadow = '0 0 2px 0 rgba(0,0,0,.08),'
export const boxShadows = [
  baseShadow + `0 2px 4px 0 ${shadowColor}`,
  baseShadow + `0 4px 8px 0 ${shadowColor}`,
  baseShadow + `0 12px 12px 0 ${shadowColor}`,
  baseShadow + `0 24px 24px 0 ${shadowColor}`
]

const theme = {
  space,
  mono,
  font,
  fontSizes,
  colors,
  scaleFactor,
  transition,
  boxShadows,
  shadowColor,
}

export default theme