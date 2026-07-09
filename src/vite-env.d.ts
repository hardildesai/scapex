/// <reference types="vite/client" />
/// <reference types="react" />

// Declare CSS module types
declare module '*.css'

// Declare static asset types
declare module '*.svg' {
  const content: string
  export default content
}
declare module '*.webp' {
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

import React from 'react'

declare global {
  namespace JSX {
    interface Element extends React.JSX.Element {}
  }
}
