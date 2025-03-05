import { ChangeEventHandler } from "react";
import styles from "./NewPost.module.css";

type Props = {
  onBodyChange: ChangeEventHandler<HTMLTextAreaElement>;
  onAuthorChange: ChangeEventHandler<HTMLInputElement>;
};

function NewPost(props: Readonly<Props>) {
  return (
    <form className={styles.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={props.onBodyChange} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={props.onAuthorChange}/>
      </p>
    </form>
  );
}

export default NewPost;
