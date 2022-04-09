import React from 'react'
import ListItem from './ListItem'
import HttpBin from './Httpbin'
import * as entity from '../entity'

type Props = {
  items: entity.User.model[]
  httpbin: entity.HttpBin.model
}

function List ({ items, httpbin }: Props) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <ListItem data={item} />
        </li>
      ))}
      <li key="test">
        <HttpBin data={httpbin}/>
      </li>
    </ul>
  )
}

export default List
