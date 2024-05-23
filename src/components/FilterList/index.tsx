import { filterIconHandler } from "../../utils/tools";
import { TFilter } from "../../utils/types";
import FilterButton from "../FilterButton";
import styles from "./filterList.module.scss";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  filters: Set<TFilter>;
  active: TFilter;
  setActive: React.Dispatch<React.SetStateAction<TFilter>>;
}
export const FilterList: React.FC<Props> = ({ filters, active, setActive }) => {
  return (
    <div className={styles.container}>
      {Array.from(filters).map((item) => {
        return (
          <FilterButton
            icon={filterIconHandler(item)}
            filter={item}
            active={active}
            setActive={setActive}
            key={item}
          />
        );
      })}
    </div>
  );
};
