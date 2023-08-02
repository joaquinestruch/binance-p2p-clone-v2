import { useStore } from "../../store"

function FilterPay() {

  const {changeFiat} = useStore(); 

  return (
    <select onChange={(e) => {
      changeFiat(e.target.value)
    }}>
        <option value="ARS">ARS</option>
        <option value="BRL">BRL</option>
        <option value="CLP">CLP</option>
        <option value="COP">COP</option>
        <option value="MXN">MXN</option>
        <option value="PEN">PEN</option>
    </select>
  )
}

export default FilterPay