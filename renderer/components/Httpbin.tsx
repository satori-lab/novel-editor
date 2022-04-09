import React from 'react'

import * as entity from '../entity'

type Props = {
    data: entity.HttpBin.model
}

function HttpBin({ data }: Props) {
    return <p>{data.origin}</p>
}

export default HttpBin
