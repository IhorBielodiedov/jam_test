import { CartSVG } from "../../assets/icons/CartSVG";
import styles from "./cartButton.module.scss";

export const CartButton = () => {
  return (
    <button className={styles.button}>
      <div>
        <CartSVG color="var(--bg-secondary)" />
      </div>
    </button>
  );
};
