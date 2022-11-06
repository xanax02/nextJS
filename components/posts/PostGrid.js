import PostItem from "./PostItem";

import classes from "./PostGrid.module.css";

const PostGrid = (props) => {
  const { posts } = props;

  return (
    <ul className={classes.grid}>
      {posts.map((post) => {
        return <PostItem post={post} />;
      })}
    </ul>
  );
};

export default PostGrid;
