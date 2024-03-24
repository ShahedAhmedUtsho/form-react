import { useState } from 'react'

import './App.css'
import Form from './components/form/Form'
import StatefulFrom from './components/stateForm/StatefulFrom'
import RefForm from './components/refForm/RefForm'
import HookFrom from './components/hookForm/Hookfrom/HookFrom'
import ReuseForm from './components/reusebleForm/ReuseForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Form></Form> */}
      {/* <StatefulFrom></StatefulFrom> */}
      {/* <RefForm></RefForm> */}
      {/* <HookFrom></HookFrom> */}
      <ReuseForm></ReuseForm>
    </>
  )
}

export default App
