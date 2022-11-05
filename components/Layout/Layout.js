import Logo from "./Logo";
import MainNavigation from "./MainNavigation";

const Layout = (props) => {
  return (
    <>
      <header>
        <Logo />
        <MainNavigation />
      </header>
      <main>{props.children}</main>
    </>
  );
};

export default Layout;
