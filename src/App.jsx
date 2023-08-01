import './App.css';
import { useState } from 'react';
import icon from './Assets/Svgs/card-logo.svg';

function App() {
  const [Name, setName] = useState('e.g. Jane Aplleseed');
  const [Number, setNumber] = useState('0000 0000 0000 0000');
  const [Dateone, setDateone] = useState('00');
  const [DateTwo, setDatetwo] = useState('00');
  const [Cvc, setCvc] = useState('000');

  function CardFrontName(event) {
    event.preventDefault();
  }

  function CardFrontNumber(event) {
    event.preventDefault();
  }

  function Binfo(event) {
    event.preventDefault();
  }

  function binfotwo(event) {
    event.preventDefault();
  }

  function Convict(event) {
    event.preventDefault();
  }

  function Concluido() {
    //fazer a segunda parte do projeto e arrumar states
    alert(`Bem vindo ${Name}, Obrigado por Visitar meu projeto!. 😎`)
  }

  return (
    <div className="App">
      <section className="bg">
        <div className="onebox">
          <div></div>
        </div>
        <div className="twobox">
          <div></div>
        </div>
      </section>
      <main>
        <section className="Card">
          <div className="Front">
            <img src={icon} alt="Marca" />
            <section className="TimeReal">
              <span className="TranspNumber">{Number}</span>
              <div className="FrontCardInfo">
                <span className="TranspName">{Name}</span>
                <span className="TranspDate">{Dateone + "/" + DateTwo}</span>
              </div>
            </section>
          </div>
          <div className="Back">
            <div>
              <span className="Binfo">{Cvc}</span>
            </div>
          </div>
        </section>

        <form onSubmit={Concluido}>
          <div className="columnOne">
            <label htmlFor="holderName">CARDHOLDER NAME</label>
            <input
              type="text"
              className="Name"
              placeholder="e.g. Jane Aplleseed"
              value={Name}
              onChange={(event) => setName(event.target.value)}
            />
            <span className="DefaultName"></span>
          </div>

          <div className="columnOne">
            <label htmlFor="CardNumber">CARD NUMBER</label>
            <input
              type="text"
              className="Number"
              placeholder="e.g 1234 5678 9123 0000"
              value={Number}
              onChange={(event) => setNumber(event.target.value)}
            />
            <span className="DefaultNumber"></span>
          </div>

          <section className="Date">
            <div className="labels">
              <label htmlFor="">EXP. DATE (MM/YY)</label>
              <label htmlFor="CVC">CVC</label>
            </div>

            <div className="state" onSubmit={Binfo}>
              <div className="Info" onSubmit={binfotwo}>
                <input
                  type="text"
                  className="Day"
                  placeholder="DAY"
                  value={Dateone}
                  onChange={(event) => setDateone(event.target.value)}
                />

                <input
                  type="text"
                  className="Day"
                  placeholder="MM"
                  value={DateTwo}
                  onChange={(event) => setDatetwo(event.target.value)}
                />
                <input
                  type="text"
                  onSubmit={Convict}
                  className="Cvc"
                  placeholder="CVC"
                  value={Cvc}
                  onChange={(event) => setCvc(event.target.value)}
                />
              </div>
              <span className="DefaultDate"></span>
            </div>

            <button type="submit" className="Confirm">
              Confirm
            </button>
          </section>
        </form>
      </main>
    </div>
  );
}

export default App;
