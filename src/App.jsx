import { Routes, Route } from "react-router-dom"

import "./sass/main.scss"

import Header from "./components/Header"
import HomePage from "./components/home-page/HomePage"
import Footer from "./components/Footer"
import DaggettControlPage from "./components/project-pages/daggett-control/DaggettControlPage"


export default function App() {



  return (
    <div className="app">

      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dcc-case-study" element={<DaggettControlPage />} />
      </Routes>

      <Footer />

    </div>
  )
}