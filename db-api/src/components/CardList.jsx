import React from 'react'
import Card from './Card'

export default function CardList({ items }) {
  return (
    <div className="row g-3">
      {items.map((it) => (
        <div className="col-12 col-sm-6 col-md-4" key={it.id}>
          <Card item={it} />
        </div>
      ))}
    </div>
  )
}