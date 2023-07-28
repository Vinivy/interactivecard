
import './App.css'

import CardFront from './Assets/images/bg-card-front.png'

function App() {
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
          </div>
          <div className="Back">
          </div>
        </section>
        <form >
          <label htmlFor="holderName">CARDHOLDER NAME</label>
          <input type="text" placeholder="Name"/>
          <label htmlFor="CardNumber">CARD NUMBER</label>
          <input type="text" />
            <label htmlFor="">EXP. DATE (MM/YY)</label>
          <div className="Date">
            <input type="text" placeholder="DAY"/>
            <input type="text" />
            <input type="text" />
          </div>
        </form>
      </main>
    </div>
  )
}

export default App
