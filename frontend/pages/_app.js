import "../styles/globals.css";
import { Provider } from "next-auth/client";
import { store } from "../store/store";
import { StoreProvider } from "easy-peasy";

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
