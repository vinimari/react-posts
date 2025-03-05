import { useState } from "react";
import NewPost from "./NewPost";
import Post from "./Post";
import styles from "./PostsList.module.css";

function PostsList() {
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

  function changeBodyHandler(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setEnteredBody(event.target.value);
  }

  function changeAuthorHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setEnteredAuthor(event.target.value);
  }

  return (
    <>
      <NewPost
        onBodyChange={changeBodyHandler}
        onAuthorChange={changeAuthorHandler}
      />
      <ul className={styles.posts}>
        <Post author={enteredAuthor} body={enteredBody} />
        <Post author="Maria" body="Texto da Maria" />
      </ul>
    </>
  );
}

export default PostsList;
