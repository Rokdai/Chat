import { toast } from "react-toastify";
import { TOAST_TYPES } from "../variables/toastTypes";

export default function notify({
  message,
  type = TOAST_TYPES.DEFAULT,
  params,
}) {
  const config = {
    position: "bottom-right",
    autoClose: 8000,
    hideProgressBar: true,
    closeOnClick: true,
    pouseOnHover: true,
    graggable: true,
    progress: undefined,
    ...params,
  };

  switch (type) {
    case TOAST_TYPES.DARK:
      return toast.dark(message, config);
    case TOAST_TYPES.SUCCESS:
      return toast.success(message, config);
    case TOAST_TYPES.WARNING:
      return toast.warning(message, config);
    case TOAST_TYPES.ERROR:
      return toString.error(message, config);
    case TOAST_TYPES.INFO:
      return toast.info(message, config);
    default:
      return toast(message, config);
  }
}
