import './App.css'

import { ReactPropTypes } from 'react'

import { useState } from 'react'

import icon from './Assets/Svgs/card-logo.svg'

function App() {
  const [ Name , setName] = useState('')
  const [ Number, setNumber] = useState()

 
  function CardFrontName(NameCard) {
    NameCard.preventDefault()    
  }

  function CardFrontNumber(NumeroCard) {
    NumeroCard.prenventDefault()
  }
  
  function Concluido() {
   
  }

 
  return (
    <div className="App" >
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
              <span className="TranspNumber">0000 0000 0000 0000</span>
              <div >
                <span className="TranspName">JANE APPLESEED</span> 
                <span className="TranspDate">00/00</span>
              </div>
            </section>
          </div>
          <div className="Back">
            <div>
              <span className="Binfo">000</span>
            </div>
          </div>
        </section>

        <form >
          <div  className="columnOne" onSubmit={CardFrontName}>
           <label htmlFor="holderName">CARDHOLDER NAME</label>
           <input 
            type="text" 
            className="Name"
            placeholder="e.g. Jane Aplleseed"
            value={Name}
            onChange={NameCard => setName(NameCard.target.value)}
           />
           <span className="DefaultName"></span>
          </div>

          <div  className="columnOne" onSubmit={CardFrontNumber}>
            <label htmlFor="CardNumber">CARD NUMBER</label>
            <input 
             type="text"
             className="Number" 
             placeholder="e.g 1234 5678 9123 0000"
             value={Number}
             onChange={NumeroCard => setNumber(NumeroCard.target.value)}/>
             <span className="DefaultNumber"></span>
          </div>

          <section className="Date">
            <div className="labes">
              <label htmlFor="">EXP. DATE (MM/YY)</label>
              <label htmlFor="CVC">CVC</label>
            </div>

           <div className="state">
              <div className="Info">
               <input type="text" 
                className="Day" 
                placeholder="DAY"/>
               <input type="text" 
                className="Day"  
                placeholder="MM"/>
               <input type="text" 
                className="Cvc" 
                placeholder='CVC'/>
              </div>
              <span className="DefaultDate">oaiao</span>
            </div>
            
            <button 
            onClick= {Concluido}
            className="Confirm">Confirm</button>
           
          </section>
        </form>
      </main>
    </div>
  )
}

export default App
