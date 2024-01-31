import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'
import './App.css'
import Footer from './components/Footer'
import Formulario from './components/formulario'

function App() {
  return (
    <>
    <header className='bg-dark py-2'>
      <h1 className='mx-2 text-light display-5 '>Formulario</h1>
    </header>
    <Container className='mainContainer'>
      <section className='py-5'>
        
      <Formulario></Formulario>
      </section>
    </Container>
    <Footer></Footer>
    </>
  )
}

export default App
