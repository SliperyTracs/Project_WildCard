import { AppProps } from "next/app";
import "../styles/globals.css";
import 'bootstrap/dist/css/bootstrap.css'; 
import { useEffect } from "react";

function MyApp({ Component, pageProps }:AppProps) {
  useEffect(() => {
    typeof document !== undefined ? require("bootstrap/dist/js/bootstrap.bundle.min.js") : null;
  }, []);
  return <Component {...pageProps} />

}
export default MyApp;