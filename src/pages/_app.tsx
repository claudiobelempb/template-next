import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { themeDark } from '../assets/styles/themes/dark';

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={themeDark}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
