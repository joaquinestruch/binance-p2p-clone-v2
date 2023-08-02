import { useStore } from "../../store"
import SvgVelas from "./SvgVelas"


function Ad() {
  const {crypto} = useStore(); 
  return (
    <section className="section-title">
        <h1>
        Opera con {crypto.toUpperCase()} sin complicaciones: compra y vende con tus métodos de pago favoritos
        </h1>
        <h2>
        Haz operaciones P2P con {crypto.toUpperCase()} hoy mismo, sin comisiones y con tu método de pago favorito
        </h2>   
        
    </section>
  )
}

export default Ad