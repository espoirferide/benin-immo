import './App.css'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Produits } from './components/Produits'


function App() {

  return (
       <main>
        <Header />
        <Hero />  
        <About />
        <Produits />
       </main>
            
  )
}

export default App
