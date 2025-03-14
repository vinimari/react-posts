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
      {posts.length > 0 && (
        <ul className={styles.posts}>
          {posts.map((post) => (
            <Post
              key={post.enteredBody}
              author={post.enteredAuthor}
              body={post.enteredBody}
            />
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no posts yet :(</h2>
          <p>Start adding some!</p>
        </div>
      )}
    </>
  );
}

export default PostsList;
