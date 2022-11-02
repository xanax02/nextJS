import { createContext, useState } from "react";

const NotificationContext = createContext({
  notification: null, // {title, message, status},
  showNotification: function () {},
  hideNotification: function () {},
});
export const NotificationContextProvider = (props) => {
  cosnt[(activeNotification, setActiveNotification)] = useState();

  const showNotificationHandler = (notificationData) => {
    setActiveNotification(notificationData);
  };

  const hideNotificationHandler = () => {
    setActiveNotification(null);
  };

  const context = {
    notification: activeNotification,
    showNotificationHandler: showNotificationHandler,
    hideNotification: hideNotificationHandler,
  };

  return (
    <NotificationContext.Provider value={context}>
      {props.children}
    </NotificationContext.Provider>
  );
};

export default NotificationContext;
