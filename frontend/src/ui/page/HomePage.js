import { memo, useCallback, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { socketSendMessage } from "../../api/socketMessages/socketMessages";
import {
  selectStatus,
  selectUserName,
  setMessages,
  setStatusOpen,
} from "../../store/slices/webSocket/webSocket";
import notify from "../../utils/notify";
import { TOAST_TYPES } from "../../variables/toastTypes";
import ChatForm from "../components/ChatForm/ChatForm";
import { SOCKET_STATUSES } from "../../variables/socketStatuses";
import MessageList from "../components/MessageList/MessageList";
import SignInForm from "../components/SignInForm/SignInForm";

import styles from "./HomePage.module.scss";

const HomePage = () => {
  const dispatch = useDispatch();

  const userName = useSelector(selectUserName);
  const socketStatus = useSelector(selectStatus);

  const socket = useRef();

  const connect = useCallback((userName) => {
    socket.current = new WebSocket("ws://localhost:5000");

    socket.current.onopen = () => {
      notify({ type: TOAST_TYPES.INFO, message: "Chat connected" });
      dispatch(setStatusOpen());

      const message = {
        event: SOCKET_STATUSES.CONNECTION,
        userName,
        id: new Date(),
        date: new Date(),
      };

      socketSendMessage(socket.current, message);
    };

    socket.current.onmessage = (event) => {
      const data = JSON.parse(event.data);
      notify({
        type: TOAST_TYPES.DEFAULT,
        message: data.message,
      });
      dispatch(setMessages(data));
    };

    socket.current.onclose = () => {
      notify({ type: TOAST_TYPES.INFO, message: "Chat closead" });
    };

    socket.current.onerror = () => {
      notify({
        type: TOAST_TYPES.ERROR,
        message: "Unknown error, please try refreshing the page",
      });
    };
  });

  const sendMessage = useCallback((value) => {
    const message = {
      id: new Date(),
      date: new Date(),
      userName,
      message: value,
      event: "message",
    };

    socketSendMessage(socket.current, message);
  });

  return (
    <div className={styles.root}>
      <MessageList />
      <div className={styles.formWrapper}>
        {socketStatus.open ? (
          <ChatForm sendMessage={sendMessage} />
        ) : (
          <SignInForm connect={connect} />
        )}
      </div>
    </div>
  );
};

export default memo(HomePage);
