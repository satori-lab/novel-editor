import React from 'react'
import Link from 'next/link'

import * as entity from '../entity'

type Props = {
  data: entity.User.model
}

function ListItem({ data }: Props) {
    return (
        <Link href="/detail/[id]" as={`/detail/${data.id}`}>
            {data.id}:{data.name}
        </Link>
    )
}

export default ListItem
