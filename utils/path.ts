export const getBasePath = () => {
  if (process.env.NODE_ENV === "production") {
    return "/portfolio" // Replace with your repository name
  }
  return ""
}

export const getImagePath = (path: string) => {
  return `.${path}`
}

