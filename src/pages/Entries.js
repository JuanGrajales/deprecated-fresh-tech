import { DataContext } from "../context/EntriesContext";
import { useContext, useEffect } from "react";
import { Card, Image, Grid, Container } from "semantic-ui-react";
import actions from "../services/api";
import Loading from "../components/Loading";

const Entries = ({
  match: {
    params: { entryType },
  },
  setPage,
}) => {
  const [entries, setEntries] = useContext(DataContext);

  useEffect(() => {
    getEntries();
  });

  const getEntries = async () => {
    let res = await actions.entries(entryType);
    entryType === "series" ? setPage("Series") : setPage("Movies");
    setEntries(res.data);
  };

  const displayEntries = () => {
    return entries.map((entry) => (
      <Grid.Column key={entry._id} mobile={8} tablet={4} computer={3}>
        <Card>
          <Image src={entry.images["Poster Art"].url} wrapped ui={false} />
          <Card.Content>
            <Card.Header>{entry.title}</Card.Header>
          </Card.Content>
        </Card>
      </Grid.Column>
    ));
  };
  return (
    <>
      {entries ? (
        <Container>
          <Grid centered>{displayEntries()}</Grid>
        </Container>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Entries;
