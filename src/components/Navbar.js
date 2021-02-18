import { Container } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="ui blue inverted stackable menu borderless">
      <Container>
        <Link className=" item" to="/">
          <h1>DEMO Streaming</h1>
        </Link>

        <div className="right menu">
          <Link className="item" to="/login">
            Log in
          </Link>
          <Link className="item" to="/register">
            <button className="ui black button">Start your free trial</button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
