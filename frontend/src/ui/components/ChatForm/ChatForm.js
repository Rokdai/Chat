import { useFormik } from "formik";
import { memo } from "react";
import Button from "../../elements/Button/Button";
import Input from "../../elements/Input/Input";

import styles from "./ChatForm.module.scss";

const ChatForm = ({ sendMessage }) => {
  const formik = useFormik({
    initialValues: {
      message: "",
    },
    onSubmit: (values) => {
      sendMessage(values.message);
      formik.resetForm();
    },
  });

  return (
    <form className={styles.root} onSubmit={formik.handleSubmit}>
      <Input
        id={"message"}
        name={"message"}
        label={"Type your message"}
        onChange={formik.handleChange}
        value={formik.values.message}
      />
      <Button type="submit">Send</Button>
    </form>
  );
};

export default memo(ChatForm);
