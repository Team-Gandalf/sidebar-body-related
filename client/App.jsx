import React from 'react';
import axios from 'axios'

import Mainbody from './components/Mainbody.jsx';
import RelatedContent from './components/RelatedContent.jsx';
import Sidebar from './components/Sidebar.jsx';

class App extends React.Component {
    constructor() {
      super();
      this.state = {
        'loading': true,
        'game': null
      };
    }
  
componentDidMount() {
  axios.get('http://localhost:1991/mainbody', {
    params: {
      _id: "5eb226e2d6d23f3fe2d49bc3",
    }
  })
  .then((res) => {
    // console.log("before setState: ", this.state);
    this.setState({
      game: res.data[0]
    });
    this.setState({loading: false});
    console.log("after setState: ", this.state);
  })
  .catch(err => {
    this.setState({loading: false});
    this.setState({err});
  });
    
}

render() {
  const {game, loading} = this.state;
  // if(loading === false) console.log("this.state in render is", game.mainbody);

    return (
    <div>
      <div>
        {loading === false ? 
        <Mainbody mainbodydata={game.mainbody}/>
        : 'Main body loading...'}
        {loading === false ? 
        <Sidebar sidebardata={game.sidebar} name={game.name}/>
        : ' Side bar content loading...'}
        {loading === false ? 
        <RelatedContent />
        : 'Related content loading...'}
      </div>
    </div>
    )
   
}
};


ReactDOM.render(<App />, document.getElementById("haider-steamy"));


