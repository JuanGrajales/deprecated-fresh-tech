import { Icon, Grid, Container } from "semantic-ui-react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Home = ({ setPage }) => {
  useEffect(() => {
    setPage("Titles");
  }, []);

  return (
    <>
      <Container>
        <Grid stackable padded>
          <Grid.Row>
            <Grid.Column mobile={16} tablet={8} computer={4}>
              <Link to="/entries/series">
                <Icon color="black" name="tv" size="massive" />
                <h3>Popular Series</h3>
              </Link>
            </Grid.Column>
            <Grid.Column mobile={16} tablet={8} computer={4}>
              <Link to="/entries/movie">
                <Icon color="black" name="record" size="massive" />
                <h3>Popular Movies</h3>
              </Link>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </>
  );
};

export default Home;
