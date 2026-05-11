import { Routes, Route } from "react-router-dom"
import { useState, createContext } from "react"

import "./sass/main.scss"

import Header from "./components/Header"
import HomePage from "./components/home-page/HomePage"
import ContactModal from "./components/home-page/modals/ContactModal"
import Footer from "./components/Footer"

export const GlobalContext = createContext()

export default function App() {

  const [showContactModal, setShowContactModal] = useState(false)

  return (
    <GlobalContext.Provider value={{showContactModal, setShowContactModal}} >
    <div className="app">

      <Header showContactModal={showContactModal} setShowContactModal={setShowContactModal} />
      <HomePage showContactModal={showContactModal} setShowContactModal={setShowContactModal} />
      <Footer />

    </div>
    </GlobalContext.Provider>
  )
}