import React from "react";
import "./filterButton.scss";
import { TFilter } from "../../utils/types";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: string;
  filter: TFilter;
  active: TFilter;
  setActive: React.Dispatch<React.SetStateAction<TFilter>>;
}

const FilterButton: React.FC<Props> = ({ icon, filter, active, setActive }) => {
  return (
    <button
      className={`animated-button ${active === filter ? "active" : ""}`}
      onClick={() => setActive(filter)}
    >
      <p role="img" aria-label="emoji" className="icon">
        {icon}
      </p>
      {active === filter && <p className="text">{filter}</p>}
    </button>
  );
};

export default FilterButton;
