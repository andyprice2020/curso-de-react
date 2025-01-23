import reactLogo from '../../assets/react.svg'
import viteLogo from '../../assets/vite.svg'
import githubLogo from '../../assets/github.svg'

const Logo = () => {
    return (
      <>
        <div>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
          <a
            href="https://github.com/andyprice2020/curso-de-react"
            target="_blank"
          >
            <img src={githubLogo} className="logo" alt="Github logo" />
          </a>
        </div>
      </>
    );
};

export default Logo;