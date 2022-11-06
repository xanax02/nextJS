import React from "react";
import PostHeader from "./PostHeader";

import classes from "./PostContent.module.css";

const DUMMY_POST = {
  slug: "getting-started-with-nextjs",
  title: "Getting started with NextJs",
  image: "getting-started-nextjs.png",
  content: "# this is content",
  date: "2022-10-10",
};

const imgPath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;

const PostContent = () => {
  return (
    <article className={classes.content}>
      <PostHeader image={imgPath} title={DUMMY_POST.title} />
      {DUMMY_POST.content}
    </article>
  );
};

export default PostContent;
