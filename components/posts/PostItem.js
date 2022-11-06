import React from "react";
import Link from "next/link";
import Image from "next/image";

const PostItem = (props) => {
  const { title, date, excerpt, slug, image } = props.post;

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const imagePath = `/images/posts/${slug}/${image}`;

  return (
    <li>
      <Link>
        <a>
          <div>
            <Image src={imagePath} alt={title} width={300} height={200} />
          </div>
          <div>
            <h3>{title}</h3>
            <time>{formattedDate}</time>
            <p>{excerpt}</p>
          </div>
        </a>
      </Link>
    </li>
  );
};

export default PostItem;
