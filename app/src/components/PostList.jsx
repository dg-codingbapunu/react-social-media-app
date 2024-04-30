import { useContext, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../components/store/post-list-store";
import WelcomeMessage from "./WelcomeMessage"; // Corrected import

const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListData);
  const [dataFatched, setDataFetched] = useState(false);
  if (!dataFatched) {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
      });
    setDataFetched(true);
  }
  const handleGetPostsClick = () => {};

  return (
    <>
      {postList.length === 0 && (
        <WelcomeMessage onGetPostsClick={handleGetPostsClick} />
      )}
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

export default PostList;
