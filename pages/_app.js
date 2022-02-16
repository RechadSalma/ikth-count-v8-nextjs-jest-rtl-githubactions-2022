import "../styles/globals.scss";
import Link from "next/link";
import { Provider } from "react-redux";
import { useStore } from "../redux/store.js";

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <div>
        <ul>
          <li>
            <Link href="/">
              <a>iK home page</a>
            </Link>
          </li>
          <li>
            <Link href="/side">
              <a>iK side page</a>
            </Link>
          </li>
          <li>
            <Link href="/*">
              <a>iK error page</a>
            </Link>
          </li>
        </ul>
        <Component {...pageProps} />
      </div>
    </Provider>
  );
}

export default MyApp;
