import Link from 'next/link'

export default ({ title, children }) => (
    <React.Fragment>
        <h2>{title}</h2>
        <Link href="../"><a>« back to all posts.</a></Link>
        {children}
    </React.Fragment>
)