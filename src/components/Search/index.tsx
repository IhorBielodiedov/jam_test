import { SearchSVG } from "../../assets/icons/SearchSVG";
import { TELEGRAM } from "../../utils/constants";
import styles from "./search.module.scss";
export const Search = () => {
  return (
    <div
      className={styles.container}
      onClick={() => TELEGRAM.HapticFeedback.impactOccurred("light")}
    >
      <input className={styles.input} type="text" placeholder="Search" />
      <div>
        <SearchSVG />
      </div>
    </div>
  );
};
