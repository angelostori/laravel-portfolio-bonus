import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLayout from "./layout/DefaultLayout"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import ProjectsDetails from "./pages/ProjectsDetails"

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>

          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/:id" element={<ProjectsDetails />} />

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
