import AllPosts from "../../components/posts/AllPosts";
import { getAllPosts } from "../../lib/posts-util";

const AllPostsPage = (props) => {
  return <AllPosts posts={props.allPosts} />;
};

export default AllPostsPage;

export const getStaticProps = () => {
  const allPosts = getAllPosts();

  return {
    props: {
      allPosts,
    },
  };
};
