import { useSelector } from 'react-redux'
const About = () => {
    const initialValue = useSelector((state) => state.product.initialValue)
    return(
        <>
        <h2>Initial value is: {initialValue}</h2>
        </>
    );
}

export default About;