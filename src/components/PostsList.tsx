import { useState } from "react";
import NewPost from "./NewPost";
import Post from "./Post";
import styles from "./PostsList.module.css";
import Modal from "./Modal";
import MainHeader from "./MainHeader";

function PostsList() {
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  function changeBodyHandler(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setEnteredBody(event.target.value);
  }

  function changeAuthorHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setEnteredAuthor(event.target.value);
  }

  function hideModalHandler(event: any) {
    setModalVisible(false);
  }

  function showModalHandler(event: any) {
    setModalVisible(true);
  }

  let modalContent;

  if (modalVisible) {
    modalContent = (
      <Modal onModalHiding={hideModalHandler}>
        <NewPost
          onBodyChange={changeBodyHandler}
          onAuthorChange={changeAuthorHandler}
        />
      </Modal>
    );
  }

  return (
    <>
      <MainHeader onCreatePost={showModalHandler} />
      {modalContent}
      <ul className={styles.posts}>
        <Post author={enteredAuthor} body={enteredBody} />
        <Post author="Maria" body="Texto da Maria" />
      </ul>
    </>
  );
}

export default PostsList;
