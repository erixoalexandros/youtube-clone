import React from 'react';
import youtube from '../api/youtube';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetails from './VideoDetails';
import './App.css';

class App extends React.Component {

  state = {videos: [], selectedVideo: null};

  onTermSubmit = async term => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    });

    this.setState({videos: response.data.items});
    this.setState({selectedVideo: response.data.items[0]});
  }

  onVideoSelect = video => {
    this.setState({selectedVideo: video});
  }

  componentDidMount() {
    this.onTermSubmit('youtube');
  }

  render() {
    return (
      <div className="app">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <VideoDetails video={this.state.selectedVideo} />
        <VideoList
          videos={this.state.videos}
          onVideoSelect={this.onVideoSelect}
        />
      </div>
      
    );
  }

}

export default App;