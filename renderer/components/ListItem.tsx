import React from 'react'
import Link from 'next/link'

import { User } from '../interfaces'

type Props = {
    data: User
}

function ListItem({ data }: Props) {
    return (
        <Link href="/detail/[id]" as={`/detail/${data.id}`}>
            {data.id}:{data.name}
        </Link>
    )
}

export default ListItem
