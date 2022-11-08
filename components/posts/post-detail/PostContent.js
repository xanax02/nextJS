import React from "react";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import PostHeader from "./PostHeader";

import classes from "./PostContent.module.css";

const PostContent = (props) => {
  const imgPath = `/images/posts/${props.post.slug}/${props.post.image}`;

  const customRenderers = {
    paragraph(para) {
      const { node } = para;
      if (node.children[0].type === "image") {
        const image = node.children[0];
        console.log(`/images/posts/${props.post.slug}/${image.url}`);
        return (
          <Image
            src={`/images/posts/${props.post.slug}/${image.url}`}
            alt={image.alt}
            width={600}
            height={300}
          />
        );
      }
      return <p>{para.children}</p>;
    },
  };

  return (
    <article className={classes.content}>
      <PostHeader image={imgPath} title={props.post.title} />
      <ReactMarkdown>{props.post.content}</ReactMarkdown>
    </article>
  );
};

export default PostContent;
