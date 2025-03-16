import { Link } from "react-router-dom";
import styles from "./Post.module.css";
import { PostData } from "../routes/NewPost";

function Post(props: Readonly<PostData>) {
  return (
    <li className={styles.post}>
      <Link to={props.id}>
        <p className={styles.author}>{props.author}</p>
        <p className={styles.text}>{props.body}</p>
      </Link>
    </li>
  );
}

export default Post;
