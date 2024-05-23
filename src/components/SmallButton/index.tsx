import styles from "./smallButton.module.scss";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  disabled?: boolean;
}

export const SmallButton: React.FC<Props> = ({
  title,
  disabled = false,
  ...attrs
}) => {
  return (
    <button className={styles.button} disabled={disabled} {...attrs}>
      <div className={styles.content}>{title}</div>
    </button>
  );
};
