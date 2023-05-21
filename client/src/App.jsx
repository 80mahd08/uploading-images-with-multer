import { BrowserRouter , Routes , Route, Link } from 'react-router-dom'
import Disp from './pages/Disp'
import Uplode from './pages/Uplode'


function App() {

  return (
    <>
      <BrowserRouter>
        <Link to="/">Home</Link>
        <Link to="/uplode">Uplode</Link>
        <Routes>
          <Route path="/" element={<Disp />} />  
          <Route path="/uplode" element={<Uplode />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
