import { ProductList } from "../../components/ProductList";
import styles from "./productListPage.module.scss";
import { Search } from "../../components/Search";
import { FilterList } from "../../components/FilterList";
import { FILTERS, PRODUCTS } from "../../utils/constants";
import { TFilter } from "../../utils/types";
import { useState } from "react";
import { CartButton } from "../../components/CartButton";
import { MenuSVG } from "../../assets/icons/MenuSVG";

export function ProductListPage() {
  const [filter, setFilter] = useState<TFilter>("donut");

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          <MenuSVG />
        </div>
      </div>
      <h1 className={styles.title}>Hi, Ihor! 👋</h1>
      <Search />
      <FilterList filters={FILTERS} active={filter} setActive={setFilter} />
      <div className={styles.listContainer}>
        <ProductList
          list={PRODUCTS.filter(
            (item, index) => index % 2 && filter === item.type && item
          )}
        />
        <ProductList
          list={PRODUCTS.filter(
            (item, index) => !(index % 2) && filter === item.type && item
          )}
          withShift
        />
        <CartButton />
      </div>
    </div>
  );
}
