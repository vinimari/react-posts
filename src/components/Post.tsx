import styles from "./Post.module.css"

type Props = {
  author: string;
  body: string;
};

function Post(props: Readonly<Props>) {
  return (
    <li className={styles.post}>
      <p className={styles.author}>{props.author}</p>
      <p className={styles.text}>{props.body}</p>
    </li>
  );
}

export default Post;
