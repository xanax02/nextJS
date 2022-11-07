import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postDirPath = path.join(process.cwd(), "posts");

export const getPostsFiles = () => {
  return fs.readdirSync(postDirPath);
};

//getting post data
export const getPostData = (postIdentifier) => {
  //postSlug for the slug route of posts
  const postSlug = postIdentifier.replace(/\.md$/, "");

  const filePath = path.join(postDirPath, `${postSlug}.md`);
  const fileData = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileData);

  //postData that is to be returned
  const postData = {
    slug: postSlug,
    ...data,
    content,
  };

  //   console.log(postData);

  return postData;
};

//getting all posts.
export const getAllPosts = () => {
  const postFiles = fs.readdirSync(postDirPath);

  const allPost = postFiles.map((postFile) => {
    return getPostData(postFile);
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

// import fs from "fs";
// import path from "path";

// import matter from "gray-matter";

// const postsDirectory = path.join(process.cwd(), "posts");

// export function getPostsFiles() {
//   return fs.readdirSync(postsDirectory);
// }

// export function getPostData(postIdentifier) {
//   const postSlug = postIdentifier.replace(/\.md$/, ""); // removes the file extension
//   const filePath = path.join(postsDirectory, `${postSlug}.md`);
//   const fileContent = fs.readFileSync(filePath, "utf-8");
//   const { data, content } = matter(fileContent);

//   const postData = {
//     slug: postSlug,
//     ...data,
//     content,
//   };

//   return postData;
// }

// export function getAllPosts() {
//   const postFiles = getPostsFiles();

//   const allPosts = postFiles.map((postFile) => {
//     return getPostData(postFile);
//   });

//   const sortedPosts = allPosts.sort((postA, postB) =>
//     postA.date > postB.date ? -1 : 1
//   );

//   return sortedPosts;
// }

// export function getFeaturedPosts() {
//   const allPosts = getAllPosts();

//   const featuredPosts = allPosts.filter((post) => post.isFeatured);

//   return featuredPosts;
// }
