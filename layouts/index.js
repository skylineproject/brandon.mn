// import Link from 'next/link'
import Head from "next/head";
import cx from "classnames";

export default ({ children, title = "BRANDON JOHNSON" }) => (
  <div className={"bg-primary min-h-screen flex flex-col justify-around"}>
    <Head>
      <title>{title}</title>
      <meta name="title" content="BRANDON JOHNSON" />
      <meta
        name="description"
        content="An independent software engineer and tech community organizer based in Minneapolis, MN. Organizer of JavaScriptMN, ServerlessMN, and other meetups. Specializes in experimental software development, research computing, and interactive geospatial experiences."
      />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://brandon.mn/" />
      <meta property="og:title" content="BRANDON JOHNSON" />
      <meta
        property="og:description"
        content="An independent software engineer and tech community organizer based in Minneapolis, MN. Organizer of JavaScriptMN, ServerlessMN, and other meetups. Specializes in experimental software development, research computing, and interactive geospatial experiences."
      />
      <meta
        property="og:image"
        content="https://s3.amazonaws.com/brandon.mn/me.jpeg"
      ></meta>

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://brandon.mn/" />
      <meta property="twitter:title" content="BRANDON JOHNSON" />
      <meta
        property="twitter:description"
        content="An independent software engineer and tech community organizer based in Minneapolis, MN. Organizer of JavaScriptMN, ServerlessMN, and other meetups. Specializes in experimental software development, research computing, and interactive geospatial experiences."
      />
      <meta
        property="twitter:image"
        content="https://s3.amazonaws.com/brandon.mn/me.jpeg"
      />

      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header className={cx("container", "mx-auto", "text-center")}>
      <h1
        className={cx([
          "text-4xl",
          "font-extrabold",
          "text-tertiary",
          "text-center",
          "inline-block",
          "border-quinary",
          "border-8",
          "border-solid",
          "px-3",
          "m-6",
        ])}
      >
        brandon johnson
      </h1>
    </header>
    <main className={"container mx-auto background-red-700"}>{children}</main>
    <footer className={"text-tertiary text-center p-4"}>
      <p>made with 💞 and ☕️ in minneapolis, mn.</p>
    </footer>

    <style jsx global>
      {`
        body > div,
        #__next,
        #__next > div,
        #__next > div > div {
          height: 100%;
        }
      `}
    </style>
  </div>
);
