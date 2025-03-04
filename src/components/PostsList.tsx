import Post from "./Post";
import styles from "./PostsList.module.css"

function PostsList() {
  return (
    <ul className={styles.posts}>
      <Post author="João" body="Texto do João" />
      <Post author="Maria" body="Texto da Maria" />
    </ul>
  );
}

export default PostsList;
