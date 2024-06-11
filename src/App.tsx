
import { AppBar } from './components/AppBar'
import { Footer } from './components/Footer'
import { Notification } from './components/Notification'
import { TabButton } from './components/TabButton'
import { Contenedor } from './modules/Contenedor'

function App() {

  return (
    <>
      <AppBar />
      <TabButton />
      <Contenedor />
      <Footer />
      <Notification />
    </>
  )
}

export default App
