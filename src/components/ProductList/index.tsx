import { IProduct } from "../../utils/types";
import { ProductCard } from "../ProductCard";
import styles from "./productList.module.scss";

interface Props {
  list: IProduct[];
  withShift?: boolean;
}
export const ProductList: React.FC<Props> = ({ list, withShift = false }) => {
  return (
    <div className={styles.container}>
      {withShift && <div style={{ height: "35px" }}></div>}
      {list.map((item, index) => {
        return <ProductCard product={item} key={index} />;
      })}
    </div>
  );
};
