import './success.css';
const Success = ({ pizzaData }) => {
  return (
    <div className="success-page">
      <div className="successmain">
        <div className='successUst'>
        <img src="images/iteration-1-images/logo.svg" alt="" />
        <h3 style={{ fontFamily: 'satisfy', color: '#FDC913' }}>lezzetin yolda</h3>
        <h2 style={{ fontFamily: 'quattrocento-bold', fontSize: '60px', color: '#FAF7F2' }}>SİPARİŞ ALINDI</h2>
        <hr style={{ color: '#FAF7F2', textAlign: 'center' }}></hr>
        
        </div>
        {pizzaData && (
          <div className='gelenBilgiler'>
            <h2 style={{ color: '#FAF7F2', textAlign:'center' }}>Position Absolute Acı Pizza</h2>
            <p>İsim: {pizzaData.isim}</p>
            <p>Seçilen Boyut: {pizzaData.boyut}</p>
            <p>Seçilen Hamur: {pizzaData.hamur}</p>
            <p>Seçilen Malzemeler: {pizzaData.malzemeler.join(", ")}</p>
            <p>Toplam Fiyat: {pizzaData.toplamFiyat}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Success;
