/* eslint-disable react/prop-types */
// Manejo de props en React
// Incluiremos parametros de entrada
const OpenLink = ({ redirectURL, logoImage, altValue }) => {
    return (
      <>
        <a href={redirectURL} target="_blank">
          <img src={logoImage} className="logo" alt={`${altValue} logo`} />
        </a>
      </>
    );
};

export default OpenLink;