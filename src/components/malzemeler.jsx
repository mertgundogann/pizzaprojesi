import React from 'react';


const malzemeler = {
    1: { id: 1, name: "  Pepperoni" },
    2: { id: 2, name: "  Domates" },
    3: { id: 3, name: "  Biber" },
    4: { id: 4, name: "  Sosis" },
    5: { id: 5, name: "  Mısır" },
    6: { id: 6, name: "  Sucuk" },
    7: { id: 7, name: "  Kanada Jambonu" },
    8: { id: 8, name: "  Sucuk" },
    9: { id: 9, name: "  Ananas" },
    10: { id: 10, name: "  Tavuk Izgara" },
    11: { id: 11, name: "  Jalepeno" },
    12: { id: 12, name: "  Kabak" },
    13: { id: 13, name: "  Soğan" },
    14: { id: 14, name: "  Sarımsak" }
  };
  

const MalzemeListesi = ({ handleMalzemeChange }) => {
  return (
    <div className="malzemeler">
      {Object.entries(malzemeler).map(([id, malzeme]) => (
        <div key={id}>
          <label>
            <input
              type="checkbox"
              onChange={(e) => handleMalzemeChange(malzeme.name, e.target.checked)}
            />
            {malzeme.name}
          </label>
        </div>
      ))}
    </div>
  );
};

export default MalzemeListesi;