import PostGrid from "../posts/PostGrid";
import classes from "./FeaturedPost.module.css";

const FeaturedPost = (props) => {
  return (
    <section className={classes.latest}>
      <h2>FeaturedPost</h2>
      <PostGrid posts={props.posts} />
    </section>
  );
};

export default FeaturedPost;
