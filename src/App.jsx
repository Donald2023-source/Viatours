import './App.css'
import Home from './Components/Home'
import { GeneralProvider } from './context/context'
function App() {
  return (
    <>
    <GeneralProvider>
      <Home/>
    </GeneralProvider>
    
    </>
  )
}

export default App
