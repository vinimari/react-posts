import { useState } from "react";
import NewPost, { PostData } from "./NewPost";
import Post from "./Post";
import styles from "./PostsList.module.css";
import Modal from "./Modal";
import MainHeader from "./MainHeader";

function PostsList() {
  const [modalVisible, setModalVisible] = useState(false);
  const [posts, setPosts] = useState<PostData[]>([]);

  function hideModalHandler() {
    setModalVisible(false);
  }

  function showModalHandler() {
    setModalVisible(true);
  }

  function addPostHandler(postData: any) {
    setPosts((existingPosts) => [postData, ...existingPosts]);
  }

  let modalContent;

  if (modalVisible) {
    modalContent = (
      <Modal onModalHiding={hideModalHandler}>
        <NewPost onCancel={hideModalHandler} onAddPost={addPostHandler} />
      </Modal>
    );
  }

  return (
    <>
      <MainHeader onCreatePost={showModalHandler} />
      {modalContent}
      <ul className={styles.posts}>
        {posts.map((post) => (
          <Post key={post.enteredBody} author={post.enteredAuthor} body={post.enteredBody} />
        ))}
      </ul>
    </>
  );
}

export default PostsList;
