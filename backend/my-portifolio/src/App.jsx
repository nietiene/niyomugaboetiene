import Home from './pages/home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './pages/about'
import Skills from './pages/skills'
import Projects from './pages/projects'
import Layout from './pages/layout'
import Contact from './pages/contact'
function App() {

  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
           <Route path='/' element={<Home />}/>
            <Route path='/about' element={<About />} />
            <Route path='/skills' element={<Skills />}/>
            <Route path='/projects' element={<Projects />}/>
            <Route path='/contact' element={<Contact />}/>
        </Route>
 
      </Routes>
    </Router>
  )
}

export default App
