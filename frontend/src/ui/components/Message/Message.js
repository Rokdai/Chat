import { useState } from "react";
import { SOCKET_STATUSES } from "../../../variables/socketStatuses";
import Time from "../Time/Time";
import InfoBox from "./components/InfoBox/InfoBox";
import styles from "./Message.module.scss";
import { setLabel } from "./utils/setLabel";

const Message = ({ message }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onClickHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.root} onClick={onClickHandler}>
      {message.event === SOCKET_STATUSES.CONNECTION ? (
        <p className={styles.message}>
          <Time time={message.date} className={styles.dispatchData} />
          User {message.userName} connected
        </p>
      ) : (
        <>
          <div className={styles.messageTitleWrapper}>
            <div className={styles.userIcon}>{setLabel(message.userName)}</div>
            <p className={styles.message}>{message.message}</p>
            <InfoBox
              isOpen={isOpen}
              userName={message.userName}
              date={message.date}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Message;
