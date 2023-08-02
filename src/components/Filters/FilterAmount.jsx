import { useStore } from "../../store"

function FilterAmount() {

    const {changeFilterAmount} = useStore(); 

  return (
    <div>
        <input type="number" className="filters amountfilter" placeholder="Introduce cantidad" onChange={(e) => {
            
            if(e.target.value == ""){
                changeFilterAmount(Infinity)
                return; 
            }

            changeFilterAmount(e.target.value)
        }} />
    </div>

  )
}

export default FilterAmount