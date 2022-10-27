import { useReducer } from "react"

const initialState = {
    contador: 10,


}
type actionType = 
     |{type:'encrease'}
     |{type:'decrease'}
     |{type:'custom', payload:number};




const contadorReducer = (state: typeof initialState, action:actionType) => {

    //el Reducer siempre va retornar un nuevo state nuca mutar este obejto.

    
    
    
    switch (action.type) {
        case 'encrease':
            return {
                ...state,
                contador:state.contador + 1
            };
        case 'decrease':
            return {
                ...state,
                contador:state.contador - 1
            };    
        case 'custom':
            return {
                ...state,
                contador:action.payload
            }    
            
            
            
            
            default:
                return state;
            }
            



}



const ContadorReducer = () => {
    const [{contador}, dispatch] = useReducer(contadorReducer,initialState,  )


    return (
        < >

            <h2>contador :{contador}</h2>
            <hr />
            <button onClick={
                ()=>dispatch({type:'encrease'})
            }> + 1</button>
            
            <button onClick={
                ()=>dispatch({type:'decrease'})
            }> - 1</button>
            <button onClick={
                ()=>dispatch({type:'custom',payload:100})
            }> 100</button>
            
            
            
            
    </ >
    )
}

export default ContadorReducer