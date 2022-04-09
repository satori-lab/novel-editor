import * as React from 'react'

import * as entity from '../entity'

type ListDetailProps = {
  item: entity.User.model
}

function ListDetail({ item: user }: ListDetailProps) {
    return (
        <div>
            <h1>
                Detail for
                {user.name}
            </h1>
            <p>
                ID:
                {user.id}
            </p>
        </div>
    )
}

export default ListDetail
