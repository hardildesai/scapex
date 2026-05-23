/// <reference types="vite/client" />

// Declare CSS module types
declare module '*.css'

// Declare static asset types
declare module '*.svg' {
  const content: string
  export default content
}
declare module '*.png' {
  const content: string
  export default content
}
declare module '*.jpg' {
  const content: string
  export default content
}
declare module '*.webp' {
  const content: string
  export default content
}
