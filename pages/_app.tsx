import React from "react";
import { Provider } from "react-redux";
import { withReduxCookiePersist } from "next-redux-cookie-wrapper";
import { createStore } from "../store/store";

const MyApp = (props) => {
  const { Component, pageProps, store } = props;
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default withReduxCookiePersist(createStore, {
  persistConfig: {
    whitelist: ["config"],
  },
})(MyApp);
