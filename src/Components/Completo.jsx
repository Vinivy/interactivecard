import  Style from "./completo.module.css"

import Checado from "../Assets/Svgs/icon-complete.svg"

function Completo() {
  return(
    <section className={Style.Check}>
      <img src={Checado} alt="" />
      <h1>THANK YOU!</h1>
        <p>we've adder your card details</p>
    </section>
  )
 }

 export default Completo