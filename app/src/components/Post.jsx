import { useContext } from "react";
import { AiFillDelete } from "react-icons/ai";
import { PostList } from "../components/store/post-list-store";
const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);

  return (
    <div classNameName="card post-card" style={{ width: "30rem" }}>
      <div classNameName="card-body">
        <h5 classNameName="card-title">
          {post.title}
          <span
            classNameName="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => deletePost(post.id)}
          >
            <AiFillDelete />
          </span>
        </h5>
        <p classNameName="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span key={tag} classNameName="badge text-bg-primary hashtag">
            {`#${tag}`}
          </span>
        ))}
        <button
          type="button"
          className="btn btn-primary button"
        >{`👍${post.reactions}`}</button>
        <button
          type="button"
          className="btn btn-primary button"
        >{`👎${post.reactions}`}</button>
        <button
          type="button"
          className="btn btn-primary button"
        >{`❤️${post.reactions}`}</button>
      </div>
    </div>
  );
};

export default Post;
