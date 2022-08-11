import Time from "../../../Time/Time";
import styles from "./InfoBox.module.scss";

const InfoBox = ({ isOpen, userName, date }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.root}>
      <div className={styles.row}>
        <span className={styles.title}>User Name:</span>
        <span className={styles.titleText}>{userName}</span>
      </div>
      <div className={styles.row}>
        <span className={styles.title}>Send:</span>
        <Time time={date} className={styles.titleText} />
      </div>
    </div>
  );
};

export default InfoBox;
