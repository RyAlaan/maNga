import { forwardRef } from "react"
import Input from "./Input"
import Label from "./Label"

const InputForm = forwardRef((props, ref) => {
    const { label, htmlFor, type, placeholder, name } = props
    return (
        <div className="my-3">
            <Label htmlFor={htmlFor}>{label}</Label>
            <Input type={type} placeholder={placeholder} name={name} id={name} ref={ref}/>
        </div>
    )
})

export default InputForm