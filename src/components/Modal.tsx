import styles from "./Modal.module.css";

type Props = {
  children: any;
  onModalHiding: any;
};

function Modal(props: Readonly<Props>) {
  return (
    <>
      <div className={styles.backdrop} onClick={props.onModalHiding}></div>
      <dialog open className={styles.modal}>
        {props.children}
      </dialog>
    </>
  );
}

export default Modal;
