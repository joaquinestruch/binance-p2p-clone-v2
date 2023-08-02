
import FilterAmount from "./FilterAmount"
import FilterPay from "./FilterPay"
import FilterUsers from "./FilterUsers"
import "./filters.css"

function FilterNav() {
  return (
    <nav className="nav-filters">
        <FilterAmount/>
        <FilterPay/>
        <FilterUsers/>
    </nav>
  )
}

export default FilterNav