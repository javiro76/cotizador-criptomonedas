import { useState } from "react";
import styled from "@emotion/styled";

// Definición del estilo del componente Label
const Label = styled.label`
  color: #fff;
  display: block;
  font-family: "Lato", sans-serif;
  font-size: 24px;
  font-weight: 700;
  margin: 15px 0;
`;

// Definición del estilo del componente Select
const Select = styled.select`
  width: 100%;
  font-size: 18px;
  padding: 14px;
  border-radius: 10px;
`;

// Definición de un hook personalizado useSelectMonedas
const useSelectMonedas = (label, opciones) => {
  // Estado local utilizando el hook useState
  const [state, setState] = useState("");

  // Definición del componente SelectMonedas
  const SelectMonedas = () => (
    <>
      {/* Etiqueta Label para describir el propósito del Select */}
      <Label>{label}</Label>
      {/* Componente Select con su estado controlado por el hook useState */}
      <Select value={state} onChange={(e) => setState(e.target.value)}>
        {/* Opción predeterminada que no tiene valor */}
        <option value="">Seleccione</option>
        {/* Mapeo de las opciones para crear elementos <option> */}
        {opciones.map((opcion) => (
          <option key={opcion.id} value={opcion.id}>
            {/* Contenido de cada opción */}
            {opcion.nombre}
          </option>
        ))}
      </Select>
    </>
  );

  // Retorna el estado y el componente SelectMonedas
  return [state, SelectMonedas];
};

// Exporta el hook personalizado useSelectMonedas
export default useSelectMonedas;
