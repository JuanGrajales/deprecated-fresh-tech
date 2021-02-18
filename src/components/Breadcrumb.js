import { Container } from "semantic-ui-react";

const Breadcrumb = ({ page }) => {
  return (
    <div className="ui black small inverted stackable menu borderless">
      <Container>
        <p className="item">Popular {page}</p>
      </Container>
    </div>
  );
};

export default Breadcrumb;
