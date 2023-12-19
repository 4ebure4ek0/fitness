import Layout from "components/layout/layout"
import Main from "pages/main"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Main />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
