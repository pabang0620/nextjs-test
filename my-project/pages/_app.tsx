import "../styles/globals.css";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";

function App({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}

export default App;
