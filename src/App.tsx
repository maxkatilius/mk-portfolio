import Header from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/Home'

function App() {

  return (
    <div className='min-h-dvh flex flex-col'>
      <Header />
      <Home />
      <Footer />
    </div>
  )
}

export default App
