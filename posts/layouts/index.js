import Head from 'next/head'
import Link from 'next/link'

export default ({ children, title = 'Brandon Johnson' }) => (
  <React.Fragment>
    <Head>
      <title>{ title }</title>
    </Head>
    <header>
      <h1><a href="/">brandon johnson</a></h1>
    </header>

    <main>
        <div />
        <div>
            { children }
        </div>
        <div />
    </main>

    <footer>
        <hr />
        <p>made with 💕 and ☕️ in mpls, mn. copyright {(new Date()).getFullYear()}, brandon johnson.</p>
        <ul>
            <li><a href="https://twitter.com/brandon_mn">twitter</a></li>
            <li><a href="https://instagram.com/brandon_mn">instagram</a></li>
            <li><a href="https://mspsocial.net/@brandon">mastodon</a></li>
            <li><a href="https://github.com/skylineproject">github</a></li>
        </ul>
    </footer>
    <style jsx>{`
        main, header, footer {
            margin: 3rem;
            font-family: "Helvetica Neue";
        }
        main {
            display: grid;
            grid-template-columns: 1fr 4fr 1fr;
        }
        footer ul {
            margin: 0;
            padding: 0;
        }
        footer ul li {
            display: inline-block;
            list-style: none;
            padding: 0.5rem;
        }
    `}</style>
  </React.Fragment>
)