import PostItem from "./PostItem";

const PostGrid = (props) => {
  const { posts } = props;

  return (
    <ul>
      {posts.map((post) => {
        return <PostItem />;
      })}
    </ul>
  );
};

export default PostGrid;
