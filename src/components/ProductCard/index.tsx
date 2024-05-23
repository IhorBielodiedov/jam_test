import { CartSVG } from "../../assets/icons/CartSVG";
import { IProduct } from "../../utils/types";
import styles from "./productCard.module.scss";
import { Link } from "react-router-dom";

interface Props {
  product: IProduct;
}

export const ProductCard: React.FC<Props> = ({ product }) => {
  return (
    <Link to={`product/${product.id}`} className={styles.container}>
      <img className={styles.image} src={product.img} alt={product.type} />

      <p className={styles.title}>{product.name}</p>
      <p className={styles.text}>{product.composition}</p>
      <div className={styles.purchase}>
        <p className={styles.title}>${product.price}</p>
        <button
          className={styles.button}
          onClick={(e) => {
            e.preventDefault();
            console.log("CLICK");
          }}
        >
          <div>
            <CartSVG color="var(--text-primary)" />
          </div>
        </button>
      </div>
    </Link>
  );
};
