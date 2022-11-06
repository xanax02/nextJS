import Hero from "../components/home-page/hero";
import FeaturedPost from "../components/home-page/FeaturedPost";

const DUMMY_POSTS = [
  {
    slug: "getting-started-with-nextjs",
    title: "Getting started with NextJs",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJS is a react framework for production- it makes building fullstack react apps and sites a breeze and ship with builtin SSR.",
    date: "2022-10-10",
  },
  {
    slug: "getting-started-with-nextjs2",
    title: "Getting started with NextJs",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJS is a react framework for production- it makes building fullstack react apps and sites a breeze and ship with builtin SSR.",
    date: "2022-10-10",
  },
  {
    slug: "getting-started-with-nextjs3",
    title: "Getting started with NextJs",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJS is a react framework for production- it makes building fullstack react apps and sites a breeze and ship with builtin SSR.",
    date: "2022-10-10",
  },
  {
    slug: "getting-started-with-nextjs4",
    title: "Getting started with NextJs",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJS is a react framework for production- it makes building fullstack react apps and sites a breeze and ship with builtin SSR.",
    date: "2022-10-10",
  },
];

const HomePage = () => {
  return (
    <>
      <Hero />
      <FeaturedPost posts={DUMMY_POSTS} />
    </>
  );
};

export default HomePage;
