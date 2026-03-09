import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLayout from "./layout/DefaultLayout"
import Home from "./pages/Home"
import Projects from "./pages/Projects.jsx"
import ProjectsDetails from "./pages/ProjectsDetails"
import { ProjectProvider } from "./context/ProjectContext.jsx"

function App() {


  return (
    <ProjectProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DefaultLayout />}>

            <Route index element={<Home />} />
            <Route path="projects" element={<Projects />} />
            <Route path="projects/:id" element={<ProjectsDetails />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </ProjectProvider>
  )
}

export default App
