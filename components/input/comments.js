import { useEffect, useState, useContext } from "react";

import CommentList from "./comment-list";
import NewComment from "./new-comment";
import classes from "./comments.module.css";
import NotificationContext from "../../store/notification-context";
import Notification from "../ui/notification";

function Comments(props) {
  const { eventId } = props;

  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);

  const notificationCtx = useContext(NotificationContext);

  //for comment loading state
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (showComments) {
      setIsLoading(true);
      fetch("/api/comments/" + eventId)
        .then((response) => response.json())
        .then((data) => {
          setComments(data.comments);
          setIsLoading(false);
        });
    }
  }, [showComments]);

  function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus);
  }

  async function addCommentHandler(commentData) {
    notificationCtx.showNotification({
      title: "Pending",
      message: "Request is Pending...",
      status: "pending",
    });
    try {
      const response = await fetch("/api/comments/" + eventId, {
        method: "POST",
        body: JSON.stringify(commentData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        const data = response.data();
        throw new Error(data.message || "Server Error");
      }
      const data = await response.json();
      notificationCtx.showNotification({
        title: "Success",
        message: "Request Seccessfull",
        status: "success",
      });
    } catch (error) {
      notificationCtx.showNotification({
        title: "ERROR",
        message: error.message || "Something went wrong",
        status: "error",
      });
    }
  }

  return (
    <>
      <section className={classes.comments}>
        <button onClick={toggleCommentsHandler}>
          {showComments ? "Hide" : "Show"} Comments
        </button>
        {showComments && <NewComment onAddComment={addCommentHandler} />}
        {isLoading && <h1>Loading .... </h1>}
        {showComments && <CommentList items={comments} />}
      </section>
      <footer>
        {notificationCtx.notification && (
          <Notification
            title={notificationCtx.title}
            message={notificationCtx.message}
            status={notificationCtx.status}
          />
        )}
      </footer>
    </>
  );
}

export default Comments;
