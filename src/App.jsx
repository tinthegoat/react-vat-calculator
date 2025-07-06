import { useState } from 'react'
import './App.css'
import vatImage from './assets/vat.jpg'

function App() {
  const [price, setPrice] = useState(0);
  const vatRate = 0.07;
  const [vat, setVat] = useState(0);
  const [total, setTotal] = useState(0);

    function handleChange(event) {
      let p = parseFloat(event.target.value) || 0;
      console.log(p);
      setPrice(p);
      const calculatedVat = p * vatRate;
      setVat(calculatedVat);
      setTotal(p + calculatedVat);
    }

  const [discount, setDiscount] = useState(0);

  function handleDiscountChange(event) {
    let d = parseFloat(event.target.value) || 0;
    setDiscount(d);
    const discountedPrice = price - d;
    const calculatedVat = discountedPrice * vatRate;
    setVat(calculatedVat);
    setTotal(discountedPrice + calculatedVat);
  }

  return (
    <>
      <div className='container'>
        <div className='header'>
        <h2 className='heading'>VAT Calculator</h2>
        <img src={vatImage} alt="vat" />
        </div>
        <div className='card-container'>
          <div className="card">
            <label htmlFor="">Price:</label>
            <input
              type="number"
              placeholder="Enter price"
              value={price === 0 ? '' : price}
              onChange={handleChange}
            />
          </div>
          <div className="card">
            <label htmlFor="">Discount:</label>
            <input
              type="number"
              placeholder="Enter discount"
              value={discount === 0 ? '' : discount}
              onChange={handleDiscountChange}
            />
          </div>
          <div>Price: {price}</div>
          <div>Discount: {discount}</div>
          <div>VAT Rate: {(vatRate * 100).toFixed(2) + "%"}</div>
          <div>VAT: {vat.toFixed(2)}</div>
          <div>Total: {total.toFixed(2)}</div>
          <button className='resetBtn'
            onClick={() => {
              setPrice(0);
              setDiscount(0);
              setVat(0);
              setTotal(0);
            }}
          >
            reset
          </button>
        </div>
      </div>
    </>
  )
}

export default App
