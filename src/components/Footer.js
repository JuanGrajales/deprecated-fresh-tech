import { Container, Grid, List, Segment, Icon } from "semantic-ui-react";
import AppStore from "./AppStore";
import PlayStore from "./PlayStore";
import WindowsStore from "./WindowsStore";

let footerStyles = {
  position: "relative",
  bottom: "0",
  width: "100%",
  height: "50px",
};

const Footer = () => {
  return (
    <div style={footerStyles}>
      <Segment inverted vertical>
        <Container>
          <Grid>
            <Grid.Row>
              <Grid.Column>
                <List horizontal inverted divided link size="small">
                  <List.Item as="a" href="#">
                    Home
                  </List.Item>
                  <List.Item as="a" href="#">
                    Terms and Conditions
                  </List.Item>
                  <List.Item as="a" href="#">
                    Privacy Policy
                  </List.Item>
                  <List.Item as="a" href="#">
                    Collection Statement
                  </List.Item>
                  <List.Item as="a" href="#">
                    Help
                  </List.Item>
                  <List.Item as="a" href="#">
                    Manage Account
                  </List.Item>
                </List>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <List inverted size="small">
                  <List.Description>
                    Copyright © 2016 DEMO Streaming. ALl Rights Reserved.
                  </List.Description>
                </List>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column mobile={16} tablet={8} computer={8}>
                <List horizontal inverted link size="small">
                  <List.Item as="a" href="https://www.facebook.com/">
                    <Icon name="facebook f" size="big" />
                  </List.Item>
                  <List.Item as="a" href="https://www.twitter.com/">
                    <Icon name="twitter" size="big" />
                  </List.Item>
                  <List.Item as="a" href="https://www.instagram.com/">
                    <Icon name="instagram" size="big" />
                  </List.Item>
                </List>
              </Grid.Column>
              <Grid.Column mobile={16} tablet={8} computer={8}>
                <List horizontal inverted link size="small">
                  <List.Item as="a" href="https://www.apple.com/app-store/">
                    <AppStore />
                  </List.Item>
                  <List.Item
                    as="a"
                    href="https://play.google.com/store?hl=en_US&gl=US"
                  >
                    <PlayStore />
                  </List.Item>
                  <List.Item
                    as="a"
                    href="https://www.microsoft.com/en-us/store/apps/windows"
                  >
                    <WindowsStore />
                  </List.Item>
                </List>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    </div>
  );
};

export default Footer;
