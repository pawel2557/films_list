import { AllRoutes } from './routes/AllRoutes'
import { Header, Footer, Card } from './components/index.jsx'
import './App.css'

function App() {

  return (
    <div className='App'>
      <Header/>
      <AllRoutes />
      <Footer />
    </div>
  )
}

export default App
