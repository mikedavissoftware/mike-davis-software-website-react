import { Routes, Route } from "react-router-dom"

import "./sass/main.scss"

import HomePage from "./components/software-page/SoftwarePage"
import AudioPage from "./components/audio-page/AudioPage"
import VideoPage from "./components/video-page/VideoPage"
import GraphicDesignPage from "./components/graphic-design-page/GraphicDesignPage"
import Footer from "./components/Footer"


export default function App() {



  return (
    <div className="app">

      <Routes>
        <Route exact path="/" element={<HomePage />} />

        <Route path="/audio" element={<AudioPage />} />

        <Route path="/video" element={<VideoPage />} />

        <Route path="/graphic-design" element={<GraphicDesignPage />} />
      </Routes>

      <Footer />

    </div>
  )
}