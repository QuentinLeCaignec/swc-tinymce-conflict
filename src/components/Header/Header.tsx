import Head from "next/head";
import Link from "next/link";
import "./header.scss";

export default function Header() {
  return (
    <>
      <Head>
        <title>HOME</title>
        <meta name="description" content="wip" />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>

      <nav className={"c-Header__TopBar"} data-testid={"top-bar"}>
        <Link href={"/"} style={{ fontWeight: "bold" }}>
          HOME
        </Link>
        <div>MENU</div>
        <div>MENU</div>
      </nav>
      <aside className={"c-Header__LeftBar"} data-testid={"left-bar"}>
        <div>MENU</div>
        <div>MENU</div>
        <div>MENU</div>
        <div>MENU</div>
      </aside>
    </>
  );
}
