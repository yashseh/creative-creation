import "./header.css";
import ColorsView from "../ColorsView";
import TitleOrSubtitleField from "../TitleOrSubtitleField";

const Header = () => {
  return (
    <div className="container">
      <h1>Filter By:</h1>
      <div className="headerMain">
        <ColorsView />
        <TitleOrSubtitleField />
      </div>
    </div>
  );
};

export default Header;
