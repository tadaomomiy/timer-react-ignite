import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home/index'
import { History } from './pages/History/index'
import { DefaultLayout } from './layouts/DefaultLayout/index'

export function Router() {
  return (
    <Routes>
      <Route path="/timer-react-ignite/" element={<DefaultLayout />}>
        <Route path="/timer-react-ignite/" element={<Home />} />
        <Route path="/timer-react-ignite/history" element={<History />} />
      </Route>
    </Routes>
  )
}
