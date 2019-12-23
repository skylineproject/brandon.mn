// import Link from 'next/link'
import Head from 'next/head'
import { theme } from '../constants'

export default ({children, title = 'BRANDON JOHNSON'}) => (
    <div>
        <Head>
            <title>{ title }</title>
            <meta charSet='utf-8' />
            <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        </Head>
        <header>
            <h1 id="name">brandon johnson</h1>
            {/*
            <nav>
                <ul>
                    <li>
                        <a>who</a>
                    </li>
                    <li>
                        <a>why</a>
                    </li>
                    <li>
                        <a>how</a>
                    </li>
                </ul>
            </nav>
            */}
        </header>
        <main>
            { children }
        </main>
        <footer>
            <p>made with 💞 and ☕️ in minneapolis, mn.</p>
        </footer>
        <style jsx global>{`
            html, body {
                font-family: "Helvetica Neue", arial;
                margin: 0;
                padding: 1rem;
                background-color: ${theme.primary};
                color: ${theme.tertiary};
            }

            body>div, #__next, #__next>div, #__next>div>div {
                height: 100%;
            }

            a {
                color: ${theme.quinary};
            }
            
            a:visited {
                color: ${theme.quaternary};
            }

            .landmark {
                padding: 1rem 0;
            }

            .btn {
                display: inline-block;
                color: ${theme.tertiary};
                padding: 0.5rem 1rem;
                margin: 0.25rem;
                border: 1px ${theme.quinary} solid;
            }

            .btn a {
                text-decoration: none;
            }

            .btn:hover { 
                color: ${theme.primary};
                background-color: ${theme.quinary};
            } 

            .btn:hover a {
                color: ${theme.primary};
            }

            .bold { 
                font-weight: bold;
            }
        `}</style>
        <style jsx>{`
            h1 {
                display: inline-block;
                padding: 0.5rem 1rem;
                color: ${theme.tertiary};
                border: 4px solid ${theme.quinary};
            }

            header, footer {
                text-align: center;
            }

            nav ul { 
                padding: 0;
                margin: 0;
            }

            nav ul li {
                list-style-type: none;
                display: inline-block;
            }
        `}</style>
    </div>
)