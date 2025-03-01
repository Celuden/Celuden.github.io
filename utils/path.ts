export const getBasePath = () => {
  if (process.env.NODE_ENV === "production") {
    return "" // No basePath needed for username.github.io
  }
  return ""
}

export const getImagePath = (path: string) => {
  return `.${path}`
}

