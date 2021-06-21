import "../styles/globals.css";
import "../styles/responsive.css";
import { Provider } from "next-auth/client";
import { store } from "../store/store";
import { StoreProvider } from "easy-peasy";
import Head from "next/head";

//Making an instance of our store

function MyApp({ Component, pageProps }) {
  return (
    <StoreProvider store={store}>
      <Provider session={pageProps.session}>
        <Component {...pageProps} />
      </Provider>
    </StoreProvider>
  );
}

export default MyApp;
