import { useStore } from "../../store"
import { CryptoPairs } from "../../utils/criptos"
import { ButtonSell, ButtonBuy } from "./ButtonsBuySell"

function NavCripto() {

  const {tradeType, changeCrypto} = useStore(); 

  return (
    <nav className="nav-cripto-selected">
        <div className="div-actions-buttons" style={{border: `1px solid ${tradeType == "buy" ? "#0ecb81" : "#f6465d"}`}}>
                <ButtonBuy/>
                <ButtonSell/>
        </div>
        {
            CryptoPairs.map((e) => {
                return(
                  <>
                  
                  <button className="button-crypto-selected" key={crypto.randomUUID()} onClick={(event) => {
                changeCrypto(e)
                }}>{e}</button>
                  </>
                )
                
            })

        }
        <select className="section-crypto-mobile" onChange={(e) => {
          changeCrypto(e.target.value)
        }}>
        {
          CryptoPairs.map((e) => {
            return <option value={e}>{e}</option>
          }) 
        }
        </select>



    </nav>
  )
}

export default NavCripto