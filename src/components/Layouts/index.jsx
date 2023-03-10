import Header from "./Header";
import "./style-layout.scss";

const Layout = ({ children }) => {
  return (
    <div className="app-wrapper">
      <Header />
      {children}
    </div>
  );
};

export default Layout;
