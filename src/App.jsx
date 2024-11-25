import { BrowserRouter, useRoutes } from 'react-router-dom'
import Home from './pages/Home'
import Blog from './pages/Blog'

const RoutesApp = () => {
  const routes = useRoutes([
    { path: '/blog/:id', element: <Blog /> },
    { path: '/', element: <Home /> },
  ])

  return routes
}

function App() {
  return (
    <>
      <BrowserRouter>
        <RoutesApp />
      </BrowserRouter>
    </>
  )
}

export default App
