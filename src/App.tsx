import Header from './components/Header'
import Footer from './components/Footer'

import Home from './pages/Home'

function App() {

  return (
    <div className='min-h-dvh min-w-dvw flex flex-col bg-white font-[Fira_Mono]'>
      <Header />
      <Home />
      <Footer />
    </div>
  )
}

export default App
