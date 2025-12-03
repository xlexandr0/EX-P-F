import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-light py-3 mt-4">
      <div className="container text-center small">
        © {new Date().getFullYear()} DB Api - Hecho con React + Vite + Zustand + Bootstrap
      </div>
    </footer>
  )
}