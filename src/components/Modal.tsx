import { useNavigate } from "react-router-dom";
import styles from "./Modal.module.css";

type Props = {
  children: any;
};

function Modal(props: Readonly<Props>) {
  const navigate = useNavigate();
  
  function closeHandler() {
    navigate("..");
  }
  
  return (
    <>
      <div className={styles.backdrop} onClick={closeHandler}></div>
      <dialog open className={styles.modal}>
        {props.children}
      </dialog>
    </>
  );
}

export default Modal;
