import React, { useEffect } from 'react'
import CardList from '../components/CardList'
import { useStore } from '../store/store'

export default function Entities() {
  const entities = useStore((s) => s.entities)
  const fetchEntities = useStore((s) => s.fetchEntities)
  const page = useStore((s) => s.page)
  const perPage = useStore((s) => s.perPage)
  const setPage = useStore((s) => s.setPage)
  const loading = useStore((s) => s.loading)

  useEffect(() => {
    if (entities.length === 0) fetchEntities()
  }, [])

  const total = entities.length
  const totalPages = Math.ceil(total / perPage) || 1
  const start = (page - 1) * perPage
  const pageItems = entities.slice(start, start + perPage)

  return (
    <div>
      <h2 className="mb-3">Listado de personajes</h2>

      {loading && <div>Loading...</div>}

      {!loading && (
        <>
          <CardList items={pageItems} />

          <nav className="mt-4">
            <ul className="pagination">
              <li className={`page-item ${page <= 1 ? 'disabled' : ''}`}>
                <button className="page-link" onClick={() => setPage(page - 1)}>Prev</button>
              </li>

              {[...Array(totalPages)].map((_, i) => (
                <li key={i} className={`page-item ${page === i + 1 ? 'active' : ''}`}>
                  <button className="page-link" onClick={() => setPage(i + 1)}>{i + 1}</button>
                </li>
              ))}

              <li className={`page-item ${page >= totalPages ? 'disabled' : ''}`}>
                <button className="page-link" onClick={() => setPage(page + 1)}>Next</button>
              </li>
            </ul>
          </nav>
        </>
      )}
    </div>
  )
}