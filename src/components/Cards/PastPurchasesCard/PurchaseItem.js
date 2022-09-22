import React from "react";
import Typography from "components/Typography/Typography";
import styles from "./PastPurchasesCard.module.css";

const PurchaseItem = ({ title, itemStyle, category, order, image }) => {
  return (
    <div className={styles.purchaseItemWrapper}>
      <Typography className={styles.itemTitle}>{title}</Typography>
      <div className={styles.itemDetail}>
        <div className={styles.itemInfo}>
          <Typography className={styles.key}>
            Style <span className={styles.itemStyle}>{itemStyle}</span>
          </Typography>
          <Typography className={styles.key}>
            Category <span className={styles.category}>{category}</span>
          </Typography>
          <Typography className={styles.key}>
            Order <span className={styles.order}>{order}</span>
          </Typography>
        </div>
        <div className={styles.itemImage}>
          <img src={image} alt="product Img" />
        </div>
      </div>
    </div>
  );
};

export default PurchaseItem;
