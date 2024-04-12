// src/pages/_app.tsx
import '../app/globals.css'; // Import your globals.css file
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <Component {...pageProps} />
  )
}

export default MyApp;