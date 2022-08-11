import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTime } from "../../../store/slices/timeTrigger/timeTrigger";
import { selectMessages } from "../../../store/slices/webSocket/webSocket";
import Message from "../Message/Message";
import styles from "./MessageList.module.scss";

const MessageList = () => {
  const dispatch = useDispatch();

  const messages = useSelector(selectMessages);

  useEffect(() => {
    setInterval(timeTrigger, 15000);

    return clearInterval(timeTrigger);
  }, []);

  const timeTrigger = () => {
    dispatch(setTime(new Date()));
  };

  return (
    <div className={styles.root}>
      {!!messages.length &&
        messages.map((item) => {
          return <Message key={item.id} message={item} />;
        })}
    </div>
  );
};

export default MessageList;
