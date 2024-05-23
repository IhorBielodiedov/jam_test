import { Link, useParams } from "react-router-dom";
import { PRODUCTS, TELEGRAM } from "../../utils/constants";
import { useEffect, useState } from "react";
import { IProduct } from "../../utils/types";
import styles from "./productItemPage.module.scss";
import { ArrowSVG } from "../../assets/icons/ArrowSVG";
import { HeartSVG } from "../../assets/icons/HeartSVG";
import { SmallButton } from "../../components/SmallButton";

export function ProductItemPage() {
  const { id } = useParams();
  const [product, setProduct] = useState<IProduct>();
  const [amount, setAmount] = useState<number>(1);

  useEffect(() => {
    if (id) {
      setProduct(PRODUCTS[parseInt(id)]);
    }
  }, [id]);
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Link
          to="/"
          className={styles.button}
          onClick={() => TELEGRAM.HapticFeedback.impactOccurred("light")}
        >
          <ArrowSVG />
        </Link>
        <HeartSVG />
      </div>
      {product && (
        <div className={styles.content}>
          <div className={styles.imageContainer}>
            <img
              className={styles.image}
              src={product.img}
              alt={product.type}
            />
          </div>
          <p className={styles.title}>{product.name}</p>
          <p className={styles.description}>{product.composition}</p>
          <div className={styles.info}>
            <p>⭐️ {product.rate}</p>
            <p>🔥 {product.energyValue} kcal</p>
            <p>
              ⏰ {product.cookingTime.min} - {product.cookingTime.max} min
            </p>
          </div>
          <p>{product.description}</p>
          <div className={styles.priceContainer}>
            <p className={styles.title}>${product.price * amount}</p>
            <div className={styles.amountController}>
              <SmallButton
                onClick={() => setAmount((state) => state - 1)}
                title={"-"}
                disabled={amount <= 0}
              />
              <div className={styles.amount}>
                <p>{amount}</p>
              </div>
              <SmallButton
                onClick={() => setAmount((state) => state + 1)}
                title={"+"}
              />
            </div>
          </div>
          <button className={styles.bigButton}>Add to bag</button>
        </div>
      )}
    </div>
  );
}
