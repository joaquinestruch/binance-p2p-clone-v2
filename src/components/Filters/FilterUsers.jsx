import { useState } from "react";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import { useStore } from "../../store";

function FilterUsers() {
  const [isOpen, setIsOpen] = useState(false);
  const { changeFilterUserType, filterUserType } = useStore();

  return (
    <div className="div-button-filter-users">
      <button
        className="btn-filter-users"
        onClick={(e) => {
          setIsOpen(!isOpen);
        }}
      >
        <span className="filtro-text">Filtro</span> {isOpen ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
      </button>

      {isOpen ? (
        <section className="btn-select-user">
          <div>
            <input
              type="checkbox"
              className="input-checkbox"
              onClick={(e) => {
                changeFilterUserType(e.target.checked);
              }}
              checked={filterUserType}
            />{" "}
            <span>Mostrar solo anuncios de comerciantes</span>
          </div>
        </section>
      ) : (
        ""
      )}
    </div>
  );
}

export default FilterUsers;
