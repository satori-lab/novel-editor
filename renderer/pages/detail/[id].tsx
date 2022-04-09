// import { NextPageContext } from 'next'
import { GetStaticPaths, GetStaticProps } from 'next'
import Layout from '../../components/Layout'
import { findAll, findData } from '../../utils/sample-api'
import ListDetail from '../../components/ListDetail'
import * as entity from '../../entity'

type Params = {
    id?: string
}

type Props = {
    item?: entity.User.model
    errors?: string
}

function InitialPropsDetail({ item, errors }: Props) {
    if (errors) {
        return (
            <Layout title="Error | Next.js + TypeScript + Electron Example">
                <p>
                    <span style={{ color: 'red' }}>Error:</span> {errors}
                </p>
            </Layout>
        )
    }

    return (
        <Layout
            title={`${
                item ? item.name : 'Detail'
            } | Next.js + TypeScript Example`}
        >
            {item && <ListDetail item={item} />}
        </Layout>
    )
}

export const getStaticPaths: GetStaticPaths = () => {
    const items: entity.User.model[] = findAll()
    const paths = items.map((item) => `/detail/${item.id}`)
    return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = ({ params }) => {
    const { id } = params as Params

    try {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        const item = findData(Array.isArray(id) ? id[0] : id)
        return {
            props: {
                item,
            },
        }
    } catch (err) {
        return {
            props: {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment
                errors: err.message,
            },
        }
    }
}

export default InitialPropsDetail
