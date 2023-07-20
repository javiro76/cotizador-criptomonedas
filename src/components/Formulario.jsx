import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import Error from "./Error";
import useSelectMonedas from "../hooks/useSelectMonedas";
import { monedas } from "../data/monedas.js";

// Estilos para el botón submit
const InputSubmit = styled.input`
  background-color: #9497ff; // Color de fondo del botón
  border: none; // Quita el borde del botón
  width: 100%; // Ancho del botón al 100% del contenedor
  padding: 10px; // Espaciado interno del contenido del botón
  color: #fff; // Color del texto del botón
  font-weight: 700; // Grosor de la fuente del texto (negrita)
  text-transform: uppercase; // Convierte el texto a mayúsculas
  font-size: 20px; // Tamaño de fuente del texto
  border-radius: 5px; // Radio de borde para redondear las esquinas
  transition: background-color 0.3s ease; // Transición suave al cambiar el color de fondo
  margin-top: 30px; // Margen superior del botón
  &:hover {
    background-color: #7a7dfe; // Color de fondo del botón al pasar el mouse por encima
    cursor: pointer; // Cambia el cursor a una mano cuando está sobre el botón
  }
`;

const Formulario = ({ setMonedas }) => {
  // State para almacenar las criptomonedas desde la API
  const [criptos, setCriptos] = useState([]);

  // State para manejar el error de formulario
  const [error, setError] = useState(false);

  // Custom hook para manejar el select de monedas
  const [moneda, SelectMonedas] = useSelectMonedas("Elige tu Moneda", monedas);

  // Custom hook para manejar el select de criptomonedas
  const [criptomoneda, SelectCriptomoneda] = useSelectMonedas(
    "Elige tu Criptomoneda",
    criptos
  );

  // useEffect para obtener las criptomonedas desde la API al cargar el componente
  useEffect(() => {
    const consultarAPI = async () => {
      const url =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD";
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();

      // Mapeo de la respuesta para obtener las criptomonedas con id y nombre
      const arrayCriptos = resultado.Data.map((cripto) => {
        const objeto = {
          id: cripto.CoinInfo.Name, // ID de la criptomoneda
          nombre: cripto.CoinInfo.FullName, // Nombre completo de la criptomoneda
        };
        return objeto;
      });

      // Actualiza el state con las criptomonedas obtenidas desde la API
      setCriptos(arrayCriptos);
    };
    consultarAPI();
  }, []);

  // Función que se ejecuta al enviar el formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Valida que ambos selects estén seleccionados
    if ([moneda, criptomoneda].includes("")) {
      setError(true); // Muestra el mensaje de error
      return;
    }

    setError(false); // Oculta el mensaje de error

    // Llama a la función setMonedas para actualizar las monedas seleccionadas en el componente padre
    setMonedas({
      moneda,
      criptomoneda,
    });
  };

  // Renderiza el formulario con los componentes de Select y el botón submit
  return (
    <>
      {error && <Error>Todos los campos son obligatorios</Error>}{" "}
      {/* Muestra el mensaje de error si hay un error */}
      <form onSubmit={handleSubmit}>
        {/* Componente Select para elegir la moneda */}
        <SelectMonedas />

        {/* Componente Select para elegir la criptomoneda */}
        <SelectCriptomoneda />

        {/* Botón submit para enviar el formulario */}
        <InputSubmit type="submit" value="Cotizar" />
      </form>
    </>
  );
};

export default Formulario;
