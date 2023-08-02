import { useStore } from "../../store"



export function ButtonBuy() {
  const {changeTradeType, tradeType} = useStore(); 
  return (
    <button className="button-buy" style={{backgroundColor: tradeType === "buy" ? "#0ecb81" : "transparent",color: tradeType === "buy" ? "white" : "black" }} onClick={(e) => {  
      changeTradeType("buy")

    }}>Comprar</button>
  )
}

export function ButtonSell() {
  const {changeTradeType,tradeType} = useStore(); 
    return (
      <button className="button-sell" style={{backgroundColor: tradeType === "sell" ? "#f6465d" : "transparent", color: tradeType === "sell" ? "white" : "black" }} onClick={(e) => {
        changeTradeType("sell")
      }}>Vender</button>
    )
  }
  

