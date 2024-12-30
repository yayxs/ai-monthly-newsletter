export type Theme = 'system' | 'light' | 'dark'

export const themes = [
  { id: 'system', name: '系统默认' },
  { id: 'light', name: '浅色' },
  { id: 'dark', name: '深色' },
] as const

export const themeColors = {
  light: {
    primary: '0, 112, 243',
    secondary: '99, 102, 241',
    accent: '168, 85, 247',
    background: '248, 250, 252',
    foreground: '15, 23, 42',
    surface: '255, 255, 255',
  },
  dark: {
    primary: '94, 234, 212',
    secondary: '59, 130, 246',
    accent: '139, 92, 246',
    background: '2, 6, 23',
    foreground: '248, 250, 252',
    surface: '15, 23, 42',
  },
}
