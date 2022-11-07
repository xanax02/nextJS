import React from "react";
import ReactMarkdown from "react-markdown";
import PostHeader from "./PostHeader";

import classes from "./PostContent.module.css";

const PostContent = (props) => {
  const imgPath = `/images/posts/${props.post.slug}/${props.post.image}`;
  return (
    <article className={classes.content}>
      <PostHeader image={imgPath} title={props.post.title} />
      <ReactMarkdown>{props.post.content}</ReactMarkdown>
    </article>
  );
};

export default PostContent;
