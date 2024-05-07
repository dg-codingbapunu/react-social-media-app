import { useContext, useRef } from "react";
import { PostList } from "./store/post-list-store";

const CreatePost = () => {
  const { addPost } = useContext(PostList);

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(" ");

    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    reactionsElement.current.value = "";
    tagsElement.current.value = "";

    addPost(userId, postTitle, postBody, reactions, tags);
  };

  return (
    <form classNameName="create-post" onSubmit={handleSubmit}>
      <div classNameName="mb-3">
        <label htmlFor="userId" classNameName="form-label">
          Enter your User Id here
        </label>
        <input
          type="text"
          ref={userIdElement}
          classNameName="form-control"
          id="userId"
          placeholder="Your User Id"
        />
      </div>

      <div classNameName="mb-3">
        <label htmlFor="title" classNameName="form-label">
          Post Title
        </label>
        <input
          type="text"
          ref={postTitleElement}
          classNameName="form-control"
          id="title"
          placeholder="How are you feeling today..."
        />
      </div>

      <div classNameName="mb-3">
        <label htmlFor="body" classNameName="form-label">
          Post Content
        </label>
        <textarea
          type="text"
          ref={postBodyElement}
          rows="4"
          classNameName="form-control"
          id="body"
          placeholder="Tell us more about it"
        />
      </div>

      <div classNameName="mb-3">
        <label htmlFor="reactions" classNameName="form-label">
          Number of reactions
        </label>
        <input
          type="text"
          ref={reactionsElement}
          classNameName="form-control"
          id="reactions"
          placeholder="How many people reacted to this post"
        />
      </div>

      <div classNameName="mb-3">
        <label htmlFor="tags" classNameName="form-label">
          Enter your hashtags here
        </label>
        <input
          type="text"
          classNameName="form-control"
          id="tags"
          ref={tagsElement}
          placeholder="Please enter tags using space"
        />
      </div>

      <button type="submit" classNameName="btn btn-primary">
        Post
      </button>
    </form>
  );
};

export default CreatePost;
