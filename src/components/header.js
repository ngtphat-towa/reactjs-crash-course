import PropTypes from "prop-types";
import Button from "./Button";
const Header = ({ title, onClick }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      {onClick !== null && (
        <Button color="green" onClick={onClick} text="add" />
      )}
    </header>
  );
};

export default Header;
Header.defaultProps = {
  title: "Task Tracker",
  onClick: null,
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
