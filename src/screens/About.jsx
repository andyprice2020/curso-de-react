import { useSelector } from 'react-redux'
import { useState } from 'react'
const About = () => {
    const initialValue = useSelector((state) => state.product.initialValue)
    /* Manejo de Hooks
    Los Hooks son funciones ya definidas en React que nos permiten 
    usar el estado y el ciclo de vida en componentes funcionales.
    Es posible crear Hooks personalizados 
    El Hook useState permite manejar variables de Estado*/
    const [ nameComponent, setNameComponent ] = useState('About')
    return(
        <>
        <h2>Initial value is: {initialValue}</h2>
        <p>Component name: {nameComponent} </p>
        <button onClick={() => {setNameComponent('Think')}}>Change Name</button>
        </>
    );
}

export default About;