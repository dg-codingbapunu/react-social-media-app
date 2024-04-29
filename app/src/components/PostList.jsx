import { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../components/store/post-list-store";
import WelcomeMessage from "./WelcomeMessage"; // Corrected import

const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListData);
  const handleGetPostsClick = () => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
      });
  };

  return (
    <>
      {postList.length === 0 && (
        <WelcomeMessage onGetPostsClick={handleGetPostsClick} /> // Corrected component name
      )}
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

export default PostList;
