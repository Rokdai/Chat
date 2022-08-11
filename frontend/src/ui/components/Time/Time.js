import { useSelector } from "react-redux";
import classNames from "classnames";

import { selectTimeTrigger } from "../../../store/slices/timeTrigger/timeTrigger";

import { checkDateTime } from "../../../utils/checkDateTime";

import styles from "./Time.module.scss";

const Time = ({ time, className }) => {
  const timeTrigger = useSelector(selectTimeTrigger);

  return (
    <span className={classNames(styles.root, className)}>
      {checkDateTime(time)}
    </span>
  );
};

export default Time;
