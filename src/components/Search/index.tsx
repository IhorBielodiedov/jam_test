import { SearchSVG } from "../../assets/icons/SearchSVG";
import styles from "./search.module.scss";
export const Search = () => {
  return (
    <div className={styles.container}>
      <input className={styles.input} type="text" placeholder="Search" />
      <div>
        <SearchSVG />
      </div>
    </div>
  );
};
