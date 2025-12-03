import create from 'zustand'

const API = 'https://dragonball-api.com/api/characters'

export const useStore = create((set, get) => ({
  entities: [],
  fetchedAt: null,
  page: 1,
  perPage: 6,
  loading: false,
  error: null,

  fetchEntities: async () => {
    try {
      set({ loading: true, error: null })
      const res = await fetch(API)
      if (!res.ok) throw new Error('Fetch error')
      const data = await res.json()
      set({ entities: data, fetchedAt: new Date().toISOString(), loading: false })
    } catch (err) {
      set({ error: err.message, loading: false })
    }
  },

  setPage: (p) => set({ page: p }),

 
  paginated: () => {
    const { entities, page, perPage } = get()
    const start = (page - 1) * perPage
    return entities.slice(start, start + perPage)
  }
}))