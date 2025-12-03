import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function RootLayout() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />

      <main className="container my-4 flex-grow-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}