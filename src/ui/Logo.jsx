import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/">
      <img src="./logo.svg" alt="website-logo" />
    </Link>
  );
}

export default Logo;