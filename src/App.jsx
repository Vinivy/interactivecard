import './App.css';
import { useState } from 'react';
import icon from './Assets/Svgs/card-logo.svg';

//Conponente quando for checado
import Completo from "./Components/Completo";

function App() {
  const [NomeCard, setNomeCard] = useState('');
  const [Number, setNumber] = useState('0000 0000 0000 0000');
  const [Dateone, setDateone] = useState('00');
  const [DateTwo, setDatetwo] = useState('00');
  const [Cvc, setCvc] = useState('');

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
    alert(`Obrigado por visitar meu Projeto ${NomeCard} 🤞😃`)
  }

  return (
    <div className="App">
      <section className="bg">
        <div className="onebox">
        </div>
        <div className="twobox">
        </div>
      </section>
      <main>
        <section className="Card">
          <div className="Front">
            <img src={icon} alt="Marca" />
            <section className="TimeReal">
              <span className="TranspNumber">{Number}</span>
              <div className="FrontCardInfo">
                <span className="TranspName">{NomeCard}</span>
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
              value={NomeCard}
              onChange={(event) => setNomeCard(event.target.value)}
              maxLength={8}

              style=
              {{
                //Se o Valor posto no input não for "Vinivy", ou se não for Letras,o outline será vermelho, eu Adicionei a Barra de espaço para n ficar dando erro, veja que tem um espaço no z a direita.
                outline: /^[A-Za-z ]*$/.test(NomeCard) ? '' : '2px solid red'
                
                
               }} />
            {/*Acima temos uma condicional em que se o minput name n tiver Letras, irá aparecer uma borda vermelha. e aqui abaixo é se o input n for com letras irá aparecer um span de aviso*/}

            {/^[A-Za-z ]*$/.test(NomeCard) && NomeCard.length > 3 ?
             (<span className="DefaultName" style={{color: 'hsl(249, 80%, 36%)'}}>Tudo Ok</span> )
              : 
             (<span className="DefaultName" style={{color: 'hsl(0, 100%, 66%)'}}>Preencha o Box</span>)
            }

            {/*E aqui abaixo tera uma condição em que se o input name chegar no maximo de caracteres permitido, ele irá avisar pelo um span */}

            { NomeCard.length === 8 ?
               (<span className="DefaultName" style={{color: 'hsl(249, 80%, 36%)'}}>Maximo de caracteres</span> ) 
               :
              (<span className="DefaultName" style={{color: 'hsl(0, 100%, 66%)'}}></span>)
             }
          </div>

          <div className="columnOne">
            <label htmlFor="CardNumber">CARD NUMBER</label>
            <input
              type="text"
              className="Number"
              placeholder="e.g 1234 5678 9123 0000"
              value={Number}
              onChange={(event) => setNumber(event.target.value)}
              maxLength={19}
              style={{
                outline : /^[0-9 ]*$/.test(Number) ? 
                '' : '2px solid red'
              }}
            />
          
            { /^[0-9 ]*$/.test(Number) ? 
            (<span className="DefaultNumber" style={{color: 'hsl(249, 80%, 36%)'}}>Tudo Certo</span>) 
            : 
            (<span className="DefaultNumber" style={{color: 'hsl(0, 100%, 66%)'}}>Algo esta errado</span>)
            }
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
                  maxLength={2}
                />

                <input
                  type="text"
                  className="Day"
                  placeholder="MM"
                  value={DateTwo}
                  onChange={(event) => setDatetwo(event.target.value)}
                  maxLength={2}
                />
                <input
                  type="text"
                  onSubmit={Convict}
                  className="Cvc"
                  placeholder="CVC"
                  value={Cvc}
                  onChange={(event) => setCvc(event.target.value)}
                  maxLength={3}
                />
              </div>
              { Cvc.length === 3 && Dateone.length === 2 && DateTwo.length === 2 ? 
              (<span className="DefaultDate" style={{color: 'hsl(249, 80%, 36%)'}}>Tudo Ok</span>)
              :
              (<span className='DefaultDate' style={{color: 'hsl(0, 100%, 66%)'}}>Preencha o Box</span>)

              }
            </div>

            <button type="submit" className="Confirm">
              Confirm
            </button>
          </section>
        </form>
        <Completo/>
      </main>
    </div>
  );
}

export default App