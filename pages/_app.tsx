import "../styles/font-face.css";
import "../styles/global-styles.css";
import "../styles/reset.css";
import "../config/theme/utility-styles";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
