import "../styles/globals.scss";
import Link from "next/link";

function MyApp({ Component, pageProps }) {
  return (
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
  );
}

export default MyApp;
