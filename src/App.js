import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Breadcrumb from "./components/Breadcrumb";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Entries from "./pages/Entries";
import { useState } from "react";

let contentStyles = {
  position: "relative",
  minHeight: "75vh",
  padding: "5vh 0",
};

const App = () => {
  const [page, setPage] = useState("Titles");
  return (
    <>
      <Navbar />
      <Breadcrumb page={page} />
      <div style={contentStyles}>
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => <Home setPage={setPage} {...props} />}
          />
          <Route
            exact
            path="/entries/:entryType"
            render={(props) => <Entries setPage={setPage} {...props} />}
          />
          <Route component={NotFound} />
        </Switch>
      </div>
      <Footer />
    </>
  );
};

export default App;
