import Link from 'next/link'
import { useRouter } from 'next/router'
import Layout from '../components/Layout'
import List from '../components/List'
import { findAll } from '../utils/sample-api'
import * as entity from '../entity'
import * as Infra from '../infrastructure'

type Props = {
    items: entity.User.model[]
    httpbin: entity.HttpBin.model
}

function WithInitialProps({ items, httpbin }: Props) {
    const router = useRouter()
    return (
        <Layout title="List Example (as Function Component) | Next.js + TypeScript + Electron Example">
            <h1>List Example (as Function Component)</h1>
            <p>
                You are currently on:
                {router.pathname}
            </p>
            <List items={items} httpbin={httpbin} />
            <p>
                <Link href="/">Go home</Link>
            </p>
        </Layout>
    )
}
export async function getStaticProps() {
    const items: entity.User.model[] = findAll()
    try {
        const repo = new Infra.HttpBin.Repository()
        const res = await repo.get()
        return { props: { items, httpbin: res.httpbin } }
    } catch (e) {
        return { props: { items, httpbin: undefined } }
    }
}

export default WithInitialProps
