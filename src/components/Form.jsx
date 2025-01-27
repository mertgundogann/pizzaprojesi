import React, { useState } from "react";
import './form.css';

const Formdosyasi = () => {
  const [selectedMalzemeler, setSelectedMalzemeler] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);
  const [selectedBoyut, setSelectedBoyut] = useState("");
  const [selectedHamur, setSelectedHamur] = useState("");

  const malzemeler = [
    "Mantar", "Sosis", "Zeytin", "Keçi Peyniri", "Sünger", 
    "Yumurtalı", "Domates", "Biber", "Soğan", "Et", 
    "Tavuk", "Limon", "Bacon", "Mozzarella"
  ];

  const handleMalzemeChange = (malzeme, isChecked) => {
    const updatedMalzemeler = {
      ...selectedMalzemeler,
      [malzeme]: isChecked,
    };

    setSelectedMalzemeler(updatedMalzemeler);
    const price = Object.values(updatedMalzemeler).filter(Boolean).length * 5;
    setTotalPrice(price);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Siparişiniz başarıyla gönderildi!');
  };

  const selectedCount = Object.values(selectedMalzemeler).filter(Boolean).length;

  return (
    <form className='mainform' onSubmit={handleSubmit}>
      <h2>Pizza Siparişi</h2>
      
      <div>
        <h3>Pizza Boyutu</h3>
        <label>
          <input
            type="radio"
            name="boyut"
            value="Küçük"
            checked={selectedBoyut === "Küçük"}
            onChange={(e) => setSelectedBoyut(e.target.value)}
          />
          Küçük
        </label>
        <label>
          <input
            type="radio"
            name="boyut"
            value="Orta"
            checked={selectedBoyut === "Orta"}
            onChange={(e) => setSelectedBoyut(e.target.value)}
          />
          Orta
        </label>
        <label>
          <input
            type="radio"
            name="boyut"
            value="Büyük"
            checked={selectedBoyut === "Büyük"}
            onChange={(e) => setSelectedBoyut(e.target.value)}
          />
          Büyük
        </label>
      </div>

      <div>
        <h3>Hamur Seçimi</h3>
        <label>
          Hamur Seçiniz
          <select value={selectedHamur} onChange={(e) => setSelectedHamur(e.target.value)}>
            <option value="">Hamur Seçiniz</option>
            <option value="İnce">İnce</option>
            <option value="Kalın">Kalın</option>
            <option value="Normal">Normal</option>
          </select>
        </label>
      </div>

      <div>
        {malzemeler.map((malzeme) => (
          <div key={malzeme}>
            <label>
              <input
                type="checkbox"
                onChange={(e) =>
                  handleMalzemeChange(malzeme, e.target.checked)
                }
              />
              {malzeme} (5 TL)
            </label>
          </div>
        ))}
      </div>

      <div className="order-section">
        <textarea
          value={`Toplam Fiyat: ${totalPrice} TL`}
          readOnly
          rows="2"
          cols="30"
        />
        <button 
          className='formbutton' 
          type="submit" 
          disabled={selectedCount < 4 || selectedCount > 10}
        >
          Siparişi Gönder
        </button>
      </div>
    </form>
  );
};

export default Formdosyasi;
