import { Switch, Route } from "react-router-dom"

import "./sass/main.scss"

import Header from "./components/Header"
import HomePage from "./components/home-page/HomePage"
import Footer from "./components/Footer"


export default function App() {



  return (
    <div className="app">

      <Header />

      <HomePage />

      <Footer />

    </div>
  )
}