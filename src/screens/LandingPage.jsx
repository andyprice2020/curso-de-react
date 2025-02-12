// LandingPage.jsx
import './css/landingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-container">
      <div className="header">
        Módulo 7: DESARROLLO FRONTEND CON REACTJS
      </div>

      <div className="section">
        <h2>Bienvenido</h2>
        <p>
          Este módulo se centra en el uso de React, incluyendo la creación
          de componentes, el manejo de hooks, y el uso de Redux.
        </p>
      </div>

      <div className="section">
        <h2>Temas Cubiertos</h2>
        <table className="temas-table">
          <tbody>
            <tr>
              <td>Componentes funcionales y de clase</td>
              <td>Uso de React hooks como useState y useEffect</td>
            </tr>
            <tr>
              <td>Creación de custom hooks como useForm</td>
              <td>Gestión de variables de estado con useState</td>
            </tr>
            <tr>
              <td>Gestión de estado global con Redux</td>
              <td>Integración de Redux con React</td>
            </tr>
            <tr>
              <td>Manejo de Formularios en React</td>
              <td>Publicando nuestra Página con GitHub Pages</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="section">
        <h2>Recursos Adicionales</h2>
        <p>
          Para profundizar en los temas cubiertos, consulta los siguientes
          recursos:
        </p>
      </div>

      <div className="footer">&copy; 2024 Módulo 7. USIP.</div>
    </div>
  );
};

export default LandingPage;