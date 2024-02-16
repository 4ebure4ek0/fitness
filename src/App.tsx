import Layout from "components/layout/layout"
import Course from "pages/coursePage/coursePage"
import Lk from "pages/lkPage/lkPage"
import Main from "pages/mainPage/mainPage"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Main />}/>
        </Route>
        <Route path='/lk' element={<Lk />}/>
        <Route path='/lk/course/:id' element={<Course />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
