import React, { useEffect } from 'react'
import CardList from '../components/CardList'
import { useStore } from '../store/store'

export default function Home() {
  const entities = useStore((s) => s.entities)
  const fetchEntities = useStore((s) => s.fetchEntities)


  useEffect(() => {
    if (entities.length === 0) fetchEntities()
  }, [])

  const six = entities.slice(0, 6)

  return (
    <>
      <section className="p-4 bg-light rounded-3 mb-4">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h1>Bienvenido a la DB Api</h1>
            <p className="lead">Ejemplo de Single Page Application usando Vite, React, Zustand y Bootstrap.</p>
          </div>
          <div className="col-md-6 text-center">
            <img src="https://picsum.photos/seed/hero/600/300" alt="hero" className="img-fluid rounded" />
          </div>
        </div>
      </section>

      <section>
        <h2 className="mb-3">Últimos items</h2>
        <CardList items={six} />
      </section>
    </>
  )
}