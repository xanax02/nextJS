import { createContext } from "react";

const NotificationContext = createContext({
  notification: null, // {title, message, status},
  showNotification: function () {},
  hideNotification: function () {},
});
export const NotificationContextProvider = (props) => {
  return (
    <NotificationContext.Provider>
      {props.children}
    </NotificationContext.Provider>
  );
};

export default NotificationContext;
