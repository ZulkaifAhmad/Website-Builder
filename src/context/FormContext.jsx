import { createContext, useContext, useState } from "react";
import { useForm } from "react-hook-form";

export let Context = createContext();

export function Forms({ children }) {
    let { register, handleSubmit, ...rest } = useForm();
    let [state, setState] = useState();
    
    return (
        <Context.Provider value={{ register, handleSubmit, state, setState, ...rest }}>
            {children}
        </Context.Provider>
    )
}


export let useFormData = () => useContext(Context);