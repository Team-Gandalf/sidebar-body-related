import React from "react";
import axios from "axios";

import Mainbody from "./components/Mainbody.jsx";
import Sidebar from "./components/Sidebar.jsx";

let proxyId = window.location.search.substring(2);

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      game: null,
    };
  }

  componentDidMount() {
    axios
      .get("/mainbody", {
        params: {
          _id: proxyId,
        },
      })
      .then((res) => {
        // console.log("before setState: ", this.state);
        this.setState({
          game: res.data[0],
        });
        this.setState({ loading: false });
        console.log("after setState: ", this.state);
      })
      .catch((err) => {
        this.setState({ loading: false });
        this.setState({ err });
      });
  }

  render() {
    console.log(proxyId);
    const { game, loading } = this.state;
    // if(loading === false) console.log("this.state in render is", game.mainbody);
    return (
      <div>
        <div>
          {loading === false ? (
            <Mainbody
              mainbodydata={game.mainbody}
              relatedcontent={game.relatedContent}
            />
          ) : (
            "Main body loading..."
          )}
          {loading === false ? (
            <Sidebar sidebardata={game.sidebar} name={game.name} />
          ) : (
            " Side bar content loading..."
          )}
        </div>
      </div>
    );
  }
}

export default App;
