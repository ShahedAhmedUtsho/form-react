

import './App.css'
import Form from './components/form/Form'
import StatefulFrom from './components/stateForm/StatefulFrom'
import RefForm from './components/refForm/RefForm'
import HookFrom from './components/hookForm/Hookfrom/HookFrom'
import ReuseForm from './components/reusebleForm/ReuseForm'

function App() {


  const handleSignUpSubmit = data => {
   
    console.log(data)
}
const handleUpdateSubmit = data =>{
  console.log(data)
}


  return (
    <>
      {/* <Form></Form> */}
      {/* <StatefulFrom></StatefulFrom> */}
      {/* <RefForm></RefForm> */}
      {/* <HookFrom></HookFrom> */}
      <ReuseForm handleSubmit={handleSignUpSubmit} title={'Sign In'} >
        <h1>hello</h1>
      </ReuseForm>
      <ReuseForm handleSubmit={handleSignUpSubmit} title={'Update'}>
        <h1>
          hi
        </h1>
      </ReuseForm>
    </>
  )
}

export default App
