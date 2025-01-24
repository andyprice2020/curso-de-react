import OpenLink from '../components/core/OpenLink.jsx'
import Body from '../components/home/Body.jsx'
import Footer from '../components/home/Footer.jsx'
import viteLogo from '../assets/vite.svg'
import reactLogo from '../assets/react.svg'
import githubLogo from '../assets/github.svg'
import '../App.css'

const Home = () => {
    const vite = 'Vite'
    const react = 'React'
    const github = 'GitHub'
    return (
      <>
        <div>
          <OpenLink 
            redirectURL="https://vite.dev"
            logoImage={viteLogo}
            altValue={vite } />
          <OpenLink
            redirectURL="https://react.dev"
            logoImage={reactLogo}
            altValue={react} />
          <OpenLink
            redirectURL="https://github.com/andyprice2020/curso-de-react"
            logoImage={githubLogo}
            altValue={github}
          />
        </div>
        <Body />
        <Footer />
      </>
    );
};

export default Home;