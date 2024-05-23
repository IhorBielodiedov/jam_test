import { Link, useParams } from "react-router-dom";
import { PRODUCTS } from "../../utils/constants";
import { useEffect, useState } from "react";
import { IProduct } from "../../utils/types";
import styles from "./productItemPage.module.scss";

export function ProductItemPage() {
  const { id } = useParams();
  const [product, setProduct] = useState<IProduct>();
  useEffect(() => {
    if (id) {
      setProduct(PRODUCTS[parseInt(id)]);
    }
  }, [id]);
  return (
    <div className={styles.container}>
      <Link to="/">back</Link>
      {product && (
        <div className={styles.content}>
          <img className={styles.image} src={product.img} alt={product.type} />
          <p>{product.name}</p>
          <p>{product.composition}</p>
          <div className={styles.info}>
            <p>⭐️ {product.rate}</p>
            <p>🔥 {product.energyValue} kcal</p>
            <p>
              ⏰ {product.cookingTime.min} - {product.cookingTime.max} min
            </p>
          </div>
          <p>{product.description}</p>
          <p>${product.price}</p>
        </div>
      )}
    </div>
  );
}
