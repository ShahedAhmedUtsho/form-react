import { useState } from "react"

const useHook = (defaultValue = null ) => {
    const [value,setValue] = useState(defaultValue)
    const handleChange = val => {
setValue(val.target.value)
    }
return [value,handleChange]
}



export default useHook