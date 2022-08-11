import { useFormik } from "formik";

import Input from "../../elements/Input/Input";
import Button from "../../elements/Button/Button";

import { useDispatch } from "react-redux";
import { setUserName } from "../../../store/slices/webSocket/webSocket";

import styles from "./SignInForm.module.scss";
import { memo } from "react";

const SignInForm = ({ connect }) => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: "",
    },
    onSubmit: (values) => {
      dispatch(setUserName(values.name));

      connect(values.name);
      formik.resetForm();
    },
  });

  return (
    <form className={styles.root} onSubmit={formik.handleSubmit}>
      <Input
        id={"name"}
        name={"name"}
        label={"User Name"}
        onChange={formik.handleChange}
        value={formik.values.name}
      />
      <Button type="submit">Sign in</Button>
    </form>
  );
};

export default memo(SignInForm);
