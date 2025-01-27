import React, { useState } from "react";
import './form.css';

const Formdosyasi = () => {
  const [selectedMalzemeler, setSelectedMalzemeler] = useState({});
  const [totalPrice, setTotalPrice] = useState(85.50); 
  const [selectedBoyut, setSelectedBoyut] = useState("");
  const [selectedHamur, setSelectedHamur] = useState("");
  const [siparisNotu, setSiparisNotu] = useState("");  
  const [isim, setIsim] = useState("");  

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
    
    const malzemeFiyat = 5; 
    const fiyatDegisimi = isChecked ? malzemeFiyat : -malzemeFiyat;
    setTotalPrice((prevPrice) => prevPrice + fiyatDegisimi);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Siparişiniz başarıyla gönderildi!');
  };

  const selectedCount = Object.values(selectedMalzemeler).filter(Boolean).length;

   const isDisabled = !isim || isim.length < 3 || !selectedBoyut || !selectedHamur || selectedCount < 4 || selectedCount > 10;


  return (
    <main>
      <h3 className="mainh3">Position Absolute Acı Pizza</h3>
      <p>85.50 TL</p>
      <p>Frontend Dev olarak hala position absolute kullanıyorsan bu çok acı pizza tam sana göre.Pizza,domates,peynir ve genellikle çeşitli diğer malzemelerle kaplanmış,daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen,genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir.. Küçük bir pizzaya bazen pizzetta denir.</p>
      <form className='mainform' onSubmit={handleSubmit}>
        <div className="boyutvehamur">
          <div className="boyut">
            <h3>Boyut seç</h3>
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

          <div className="hamur">
            <h3>Hamur Seç</h3>
            <select value={selectedHamur} onChange={(e) => setSelectedHamur(e.target.value)}>
              <option value="">Hamur Seçiniz</option>
              <option value="İnce">İnce</option>
              <option value="Kalın">Kalın</option>
              <option value="Normal">Normal</option>
            </select>
          </div>
        </div>

        <div className="malzemeler">
          {malzemeler.map((malzeme) => (
            <div key={malzeme}>
              <label>
                <input
                  type="checkbox"
                  onChange={(e) =>
                    handleMalzemeChange(malzeme, e.target.checked)
                  }
                />
                {malzeme}
              </label>
            </div>
          ))}
        </div>

        <div>
          <label htmlFor="isim">İsim:</label>
          <input
            type="text"
            id="isim"
            name="isim"
            placeholder="Adınızı girin"
            value={isim}
            onChange={(e) => setIsim(e.target.value)}
            required
            minLength="3"
          />
        </div>

        <div className="siparisNot">
          <label htmlFor="not">Sipariş Notu:</label>
          <textarea
            id="not"
            name="not"
            placeholder="Siparişinize eklemek istediğiniz bir not var mı?"
            rows="3"
            value={siparisNotu}
            onChange={(e) => setSiparisNotu(e.target.value)}
          />
        </div>

        <div className="order-section">
          <textarea
            value={`Toplam Fiyat: ${totalPrice} TL\nSeçilen Malzemelerin Fiyatı: ${selectedCount * 5} TL`}
            readOnly
            rows="2"
            cols="30"
          />
          <button
            className="formbutton"
            type="submit"
            disabled={isDisabled}
          >
            Siparişi Gönder
          </button>
        </div>
      </form>
    </main>
  );
};

export default Formdosyasi;
