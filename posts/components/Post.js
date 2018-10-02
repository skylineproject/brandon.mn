import Link from 'next/link'

export default ({ title, children }) => (
    <React.Fragment>
        <h2>{title}</h2>
        <Link href="/">« back to all posts.</Link>
        {children}
    </React.Fragment>
)