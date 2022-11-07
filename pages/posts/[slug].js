import PostContent from "../../components/posts/post-detail/PostContent";
import { getPostData, getPostsFiles } from "../../lib/posts-util";

const PostDetailPage = (props) => {
  return (
    <>
      <PostContent post={props.post} />
    </>
  );
};

export default PostDetailPage;

export const getStaticProps = (context) => {
  const { params } = context;
  const { slug } = params;

  const post = getPostData(slug);

  return {
    props: {
      post,
    },
    revalidate: 600,
  };
};

export const getStaticPaths = () => {
  const postFileNames = getPostsFiles();

  const slugs = postFileNames.map((fileName) => {
    return fileName.replace(/\.md$/, "");
  });

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
};
