const Landing = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Modulo 7: DESARROLLO FRONTEND CON REACTJS</h1>
      <h2 style={styles.subtitle}>Bienvenido</h2>
      <p style={styles.paragraph}>
        Este módulo se centra en el uso de React, incluyendo la creación de componentes, el manejo de hooks, y el uso de Redux.
      </p>
      <h2 style={styles.subtitle}>Temas Cubiertos</h2>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Componentes funcionales y de clase</th>
            <th style={styles.th}>Uso de React hooks como useState y useEffect</th>
            <th style={styles.th}>Creación de custom hooks como useForm</th>
            <th style={styles.th}>Gestión de variables de estado con useState</th>
            <th style={styles.th}>Gestión de estado global con Redux</th>
            <th style={styles.th}>Integración de Redux con React</th>
            <th style={styles.th}>Manejo de Formularios en React</th>
            <th style={styles.th}>Publicando nuestra Pagina con GitHub Pages</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={styles.td}></td>
            <td style={styles.td}></td>
            <td style={styles.td}></td>
            <td style={styles.td}></td>
            <td style={styles.td}></td>
            <td style={styles.td}></td>
            <td style={styles.td}></td>
            <td style={styles.td}></td>
          </tr>
        </tbody>
      </table>
      <p style={styles.paragraph}>
        Para profundizar en los temas cubiertos, consulta los siguientes recursos:
      </p>
      <footer style={styles.footer}>
        © 2024 Modulo 7. USIP.
      </footer>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  title: {
    color: '#333',
    textAlign: 'center',
    marginBottom: '20px',
  },
  subtitle: {
    color: '#555',
    marginTop: '20px',
    marginBottom: '10px',
  },
  paragraph: {
    color: '#666',
    lineHeight: '1.6',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '20px',
    marginBottom: '20px',
  },
  th: {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '10px',
    border: '1px solid #ddd',
    textAlign: 'left',
  },
  td: {
    padding: '10px',
    border: '1px solid #ddd',
    textAlign: 'left',
  },
  footer: {
    marginTop: '20px',
    textAlign: 'center',
    color: '#777',
  },
};

export default Landing;