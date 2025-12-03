import React from 'react'

export default function Card({ item }) {
  return (
    <div className="card h-100">
      <img src={`https://picsum.photos/seed/${item.id}/400/200`} className="card-img-top" alt="cover" />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text text-truncate">{item.body}</p>
        <div className="mt-auto small text-muted">ID: {item.id}</div>
      </div>
    </div>
  )
}