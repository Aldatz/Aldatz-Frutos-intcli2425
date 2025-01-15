import './App.css'
import PotionList from './components/potionList'
import { potions } from './data/data'

function App() {


  return (
    <>
      <PotionList potions={potions}>

      </PotionList>
    </>
  )
}

export default App
