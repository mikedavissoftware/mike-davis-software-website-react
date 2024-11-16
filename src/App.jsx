import { Routes, Route } from "react-router-dom"

import "./sass/main.scss"

import HomePage from "./components/home-page/HomePage"
import MediaPage from "./components/media-page/MediaPage"
import Footer from "./components/Footer"

export default function App() {

  return (
    <div className="app">
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/media" element={<MediaPage />} />
        <Route path="/media/work" element={<MediaPage />} />
      </Routes>

      <Footer />
    </div>
  )
}