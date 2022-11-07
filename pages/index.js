import Hero from "../components/home-page/hero";
import FeaturedPost from "../components/home-page/FeaturedPost";
import { getFeaturedPosts } from "../lib/posts-util";

const HomePage = (props) => {
  return (
    <>
      <Hero />
      <FeaturedPost posts={props.featuredPosts} />
    </>
  );
};

export default HomePage;

export const getStaticProps = () => {
  const featuredPosts = getFeaturedPosts();
  return {
    props: { featuredPosts },
  };
};
