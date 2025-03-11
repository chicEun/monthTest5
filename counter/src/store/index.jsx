import { createContext, useEffect, useReducer, useState } from "react";
import { reducer } from "./reducer";
import axios from "axios";




export const CounterContext = createContext(null);

export const CounterProvider = ({children}) => {
    

    const [state, dispatch] = useReducer(reducer, ({count:0}))
    const [ history, setHistory ] = useState([]);

    useEffect (()=> {
        console.log("됨?");
        
        // try{
        //     const getCounter = async() => {
        //         const {data} = await axios.get("http://localhost:3005");
        //         console.log(data);
                


        //     }
        //     getCounter();
        // } catch (error) {
        //     console.log(error); 
        // }
       
    },[])

    return (
        <CounterContext.Provider value={{state,dispatch, history, setHistory}}>
            {children}
        </CounterContext.Provider>
    )
    
}