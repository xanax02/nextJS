import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postDirPath = path.join(process.cwd(), "posts");

// const getPostData = (fileName) => {
//     const filePath = path.join(postDir, fileName);
//     const fileData = fs.readFileSync(filePath);
//     const { data, content} = matter(fileData);

//     // postSlug for the slug route
//     const postSlug = fileName.remove(/\.md$/, '');
//     // post data
//     const postData = {
//         slug: postSlug,
//         ...data,
//         content
//     }
//     return postData;
// }

//getting post data
const getPostData = (fileName) => {
  const filePath = path.join(postDirPath, fileName);
  const fileData = fs.readFileSync(filePath);
  const { data, content } = matter(fileData);

  //postSlug for the slug route of posts
  const postSlug = fileName.remove(/\.md$/, "");

  //postData that is to be returned
  const postData = {
    slug: postSlug,
    ...data,
    content,
  };

  return postData;
};

//getting all posts.
export const getAllPosts = () => {
  const postFiles = fs.readdirSync(postDirPath);

  const allPost = postFiles.map((postFile) => {
    getPostData(postFile);
  });

  //sorted post on basis of date
  const sortedPost = allPost.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1
  );

  return sortedPost;
};

//getting Featured Post
export const getFeaturedPosts = () => {
  const allPosts = getAllPosts();
  const featuredPosts = allPosts.filter((post) => post.isFeatured);

  return featuredPosts;
};
