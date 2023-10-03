import './App.css'
import { Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
const Home = lazy(() => import('./global-components/Home'));
import Loader from './global-components/Loader';


function App() {

  return (
    <>
      <Suspense fallback={<Loader/>}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Suspense>
    </>
  )
}

export default App
