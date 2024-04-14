import './App.css'
import { Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
const Home = lazy(() => import('./pages/Store'));
import Loader from './global-components/Loader';
import Checkout from './pages/Checkout';
import ProductList from './pages/ProductList';
import ProductView from './pages/ProductView';
import Store from './pages/Store';
import Landing from './pages/Landing';
import Navbar from './global-components/Navbar';


function App() {

  return (
    <>
      <Suspense fallback={<Loader/>}>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/store" element={<Store />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/productlist" element={<ProductList />} />
          <Route path="/productview" element={<ProductView />} />
        </Routes>
      </Suspense>
    </>
  )
}

export default App
