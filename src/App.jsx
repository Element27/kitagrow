
import appStyles from './app.module.scss'
import Sidebar from './components/layout/Sidebar'

function App() {

  return (
    <>
      <Sidebar>
        <h1 className={appStyles.h1}>We are live...!</h1>
      </Sidebar>
    </>
  )
}

export default App
