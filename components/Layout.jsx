import Link from "next/link";

export default function Layout({ children }) {
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
      {children}
    </div>
  );
}
