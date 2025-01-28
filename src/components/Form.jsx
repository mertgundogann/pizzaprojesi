import React, { useState, useEffect } from "react";
import './form.css';
import MalzemeListesi from "./malzemeler";

const Formdosyasi = () => {
  const [selectedMalzemeler, setSelectedMalzemeler] = useState({});
  const [totalPrice, setTotalPrice] = useState(85.50);
  const [selectedBoyut, setSelectedBoyut] = useState("");
  const [selectedHamur, setSelectedHamur] = useState("");
  const [siparisNotu, setSiparisNotu] = useState("");
  const [isim, setIsim] = useState("");
  const [errors, setErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    validateForm();
  }, [selectedBoyut, selectedHamur, selectedMalzemeler, isim]);

  const handleMalzemeChange = (malzeme, isChecked) => {
    const updatedMalzemeler = { ...selectedMalzemeler, [malzeme]: isChecked };
    setSelectedMalzemeler(updatedMalzemeler);

    const malzemeFiyat = 5;
    const fiyatDegisimi = isChecked ? malzemeFiyat : -malzemeFiyat;
    setTotalPrice((prevPrice) => prevPrice + fiyatDegisimi);
  };

  const validateForm = () => {
    let newErrors = {};

    if (!isim) newErrors.isim = "İsim boş bırakılamaz!";
    if (!selectedBoyut) newErrors.boyut = "Boyut seçimi yapılmadı!";
    if (!selectedHamur) newErrors.hamur = "Hamur seçimi yapılmadı!";

    const selectedMalzemeCount = Object.values(selectedMalzemeler).filter(Boolean).length;
    if (selectedMalzemeCount < 4 || selectedMalzemeCount > 10) {
      newErrors.malzeme = "4 ile 10 arasında malzeme seçimi yapılmalıdır!";
    }

    setErrors(newErrors);
  };

  const selectedCount = Object.values(selectedMalzemeler).filter(Boolean).length;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(errors).length === 0 && selectedCount >= 4 && selectedCount <= 10) {
      setFormSubmitted(true);
    }
  };

  return (
    <main>
      <h3 className="mainh3">Position Absolute Acı Pizza</h3>
      <span>{totalPrice} TL</span>
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
            {errors.boyut && <div className="error">{errors.boyut}</div>}
          </div>

          <div className="hamur">
            <h3>Hamur Seç</h3>
            <select value={selectedHamur} onChange={(e) => setSelectedHamur(e.target.value)}>
              <option value="">Hamur Seçiniz</option>
              <option value="İnce">İnce</option>
              <option value="Kalın">Kalın</option>
              <option value="Normal">Normal</option>
            </select>
            {errors.hamur && <div className="error">{errors.hamur}</div>}
          </div>
        </div>

        <div className="malzemediv">
        <h3>Ek malzemeler</h3>
        <MalzemeListesi handleMalzemeChange={handleMalzemeChange} />
        {errors.malzeme && <div className="error">{errors.malzeme}</div>}
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
          {errors.isim && <div className="error">{errors.isim}</div>}
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
            value={`Toplam Fiyat: ${totalPrice} TL\nSeçilen Malzemelerin Fiyatı: ${(selectedCount * 5)} TL`}
            readOnly
            rows="3"
            cols="30"
          />
          <button
            className="formbutton"
            type="submit"
            disabled={Object.keys(errors).length > 0 || selectedCount < 4 || selectedCount > 10 || isim.length < 3}
          >
            Siparişi Gönder
          </button>
        </div>
      </form>

      {formSubmitted && <div className="success-message">Form başarıyla gönderildi!</div>}
    </main>
  );
};

export default Formdosyasi;
