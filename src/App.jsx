import { Routes, Route } from "react-router-dom"
import { useState, createContext } from "react"

import "./sass/main.scss"

import HomePage from "./components/home-page/HomePage"
import ContactModal from "./components/home-page/modals/ContactModal"
import Footer from "./components/Footer"

export const GlobalContext = createContext()

export default function App() {

  const [showContactModal, setShowContactModal] = useState(false)

  return (
    <GlobalContext.Provider value={{showContactModal, setShowContactModal}} >
    <div className="app">

      <Header />

      <HomePage />

      <Footer />

    </div>
    </GlobalContext.Provider>
  )
}