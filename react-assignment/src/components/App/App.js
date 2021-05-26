import React from 'react';
import './App.css';

import  SearchBar  from '../SearchBar/SearchBar';
import  SearchResults  from "../SearchResults/SearchResults";
import  Playlist from '../Playlist/Playlist';


class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        SearchResults: [
          {
          name: 'Stronger', 
          artist: 'Britney Spears',
          album: 'Oops!..I Did it Again',
          id: 1                                    },      
        {
          name: 'So Emotional', 
          artist: 'Whitney Houston',
          album: 'Whitney',               
          id: 2                                   },
        
        {
          name: 'It\'s Not Right But It\'s Okay', 
          artist: 'Whitney Houston',
          album: 'My Love is Your Love',
          id: 3                                    }],

        playlistName: 'My Playlist',

        playlistTracks: [{    name: 'Stronger4', 
                              artist: 'Britney Spears',
                              album: 'Oops!..I Did it Again',
                              id: 4    },
                             { name: 'Stronger4', 
                              artist: 'Britney Spears',
                              album: 'Oops!..I Did it Again',
                              id: 5    },
                             { name: 'Stronger4', 
                              artist: 'Britney Spears',
                              album: 'Oops!..I Did it Again',
                              id: 6    },
                            ]
                          };
        
      this.addTrack = this.addTrack.bind(this); 
      this.removeTrack = this.removeTrack.bind(this);
   }
        

        
    addTrack(track) {
      let tracks = this.state.playlistTracks;
      if (tracks.find(savedTrack => savedTrack.id === track.id) ) {
        return;
      }

    tracks.push(track);
    this.setState({playlistTracks: tracks})
  }

    removeTrack(track) {
      let tracks = this.state.playlistTracks;
      tracks = tracks.filter(currentTrack => currentTrack.id !== track.id);

      this.setState ({playlistTracks: tracks});
    }




        render() {
          return (
            <div>
               <h1>Ja<span className="highlight">mmm</span>ing</h1>
                 <div className="App">
                     <SearchBar />
                 <div className="App-playlist">
                     <SearchResults searchResults={this.state.SearchResults} 
                                    onAdd={this.addTrack.onAdd}            
                                    isRemoval={false}/>
                     <Playlist playlistName={this.state.playlistName} 
                               playlistTracks={this.state.playlistTracks}     
                               onRemove={this.removeTrack} />
                  </div>
                </div>
            </div>
          );
        
    }
}

export default App;