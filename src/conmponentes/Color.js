import React from "react";

const Color = ({ color }) => {
  // Vérifier si color est défini
  if (!color) {
    return null; // Retourner null si color est undefined ou null
  }

  return (
    <>
      <ul className="colors ps-0">
        {color.map((item, index) => (
          <li key={index} style={{ backgroundColor: item.color }}>
            {/* Contenu de chaque <li> */}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Color;
