import React, { useState, useEffect } from "react";
import axios from "axios";
import './form.css';
import MalzemeListesi from "./malzemeler";
import { useHistory } from "react-router-dom";
import Header from "./Header";

const Formdosyasi = () => {
  const history = useHistory();
  const [selectedMalzemeler, setSelectedMalzemeler] = useState({});
  const [totalPrice, setTotalPrice] = useState(85.50);
  const [orderCount, setOrderCount] = useState(1);
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
      const pizzaData = {
        isim,
        boyut: selectedBoyut,
        hamur: selectedHamur,
        malzemeler: Object.keys(selectedMalzemeler).filter(malzeme => selectedMalzemeler[malzeme]),
        siparisNotu,
        toplamFiyat: totalPrice * orderCount,
      };


      axios.post('https://reqres.in/api/pizza', pizzaData)
        .then((response) => {
          console.log('Sipariş Başarılı:', response.data);
          setFormSubmitted(true);
          history.push({
            pathname: '/success',
            state: { orderData: response.data }
          });
        })
        .catch((error) => {
          console.error('Hata:', error);
        });

    }
  };

  const addOrder = () => {
    setOrderCount(orderCount + 1);
    setTotalPrice(prevPrice => prevPrice + 85.50);
  };

  const removeOrder = () => {
    if (orderCount > 1) {
      setOrderCount(orderCount - 1);
      setTotalPrice(prevPrice => prevPrice - 85.50);
    }
  };

  return (
    
    <main>
      <Header></Header>
      <div className="ustKisim">
        <h3 className="mainh3 black">Position Absolute Acı Pizza</h3>
        <div className="spans">
          <span className="fiyat black">85.50₺</span>
          <span className="skor">4.9</span>
          <span className="sayi">(200)</span>
        </div>
        <p className="mainp">Frontend Dev olarak hala position absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir.. Küçük bir pizzaya bazen pizzetta denir.</p>
      </div>
      <form className='mainform' onSubmit={handleSubmit}>
        <div className="boyutvehamur">
          <div className="boyut">
            <h4 className="black">Boyut seç</h4>
            <label>
              <input
                type="radio"
                name="boyut"
                value="Küçük"
                checked={selectedBoyut === "Küçük"}
                onChange={(e) => setSelectedBoyut(e.target.value)}
              />
              <span>  Küçük</span>
            </label>
            <label>
              <input
                type="radio"
                name="boyut"
                value="Orta"
                checked={selectedBoyut === "Orta"}
                onChange={(e) => setSelectedBoyut(e.target.value)}
              />
              <span>  Orta</span>
            </label>
            <label>
              <input
                type="radio"
                name="boyut"
                value="Büyük"
                checked={selectedBoyut === "Büyük"}
                onChange={(e) => setSelectedBoyut(e.target.value)}
              />
              <span>  Büyük</span>
            </label>
            {errors.boyut && <div className="error">{errors.boyut}</div>}
          </div>

          <div className="hamur">
            <h4 className="black">Hamur Seç</h4>
            <select className='hamuroptions' value={selectedHamur} onChange={(e) => setSelectedHamur(e.target.value)}>
              <option value="">Hamur Seçiniz</option>
              <option value="İnce">İnce</option>
              <option value="Kalın">Kalın</option>
              <option value="Normal">Normal</option>
            </select>
            {errors.hamur && <div className="error">{errors.hamur}</div>}
          </div>
        </div>
        <hr></hr>
        <div className="malzemediv">
          <h3 className="black">Ek malzemeler</h3>
          <MalzemeListesi handleMalzemeChange={handleMalzemeChange} className='malzemeler' />
          {errors.malzeme && <div className="error">{errors.malzeme}</div>}
        </div>
        <hr></hr>
        <div className="isimkismi">
          <label htmlFor="isim" className="black isimlabel"><h4>İsim:</h4>  </label>
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
        <hr></hr>
        <div className="siparisNot">
          <label htmlFor="not" className="black"><h4>Sipariş Notu:</h4></label>
          <textarea
            id="not"
            name="not"
            placeholder="Siparişinize eklemek istediğiniz bir not var mı?"
            rows="1"
            value={siparisNotu}
            onChange={(e) => setSiparisNotu(e.target.value)}
          />
        </div>

        <div className="order-section">
          <div className="artieksi">
          <button type="button" onClick={removeOrder}>-</button>
            <h4>{orderCount}</h4>
            
            <button type="button" onClick={addOrder}>+</button>
          </div>

          <div className="ozetvebuton">
            <textarea
              className="ordertext"
              value={`Sipariş Toplamı\nSeçimler : ${(selectedCount * 5)}₺\nToplam Fiyat: ${totalPrice}₺\n(Sipariş Adeti: ${orderCount})`}
              readOnly
              rows="3"
              cols="30"
            />
            <button
              className="formbutton"
              type="submit"
              disabled={Object.keys(errors).length > 0 || selectedCount < 4 || selectedCount > 10 || isim.length < 3}
            >
              SİPARİŞ VER
            </button>
          </div>
        </div>
      </form>

      {formSubmitted && <div className="success-message">Form başarıyla gönderildi!</div>}
    </main>
  );
};

export default Formdosyasi;
