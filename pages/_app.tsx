import "../styles/globals.css";
import NProgress from "nprogress";
import type { AppProps } from "next/app";
import { Router } from "next/router";
import "../styles/nprogress.css";

NProgress.configure({ showSpinner: false });
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
