const themeClass = 'dark'

export const setTheme = (theme) => {
  return localStorage.setItem(themeClass, theme)
}
export const getTheme = () => {
  return localStorage.getItem(themeClass)
}

