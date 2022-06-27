import { BrowserRouter, Routes, Route } from 'react-router-dom'
import routes from 'contants/routes'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route, index) => {
          const { component: Component, path } = route
          return <Route key={index} path={path} element={<Component />} />
        })}
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
