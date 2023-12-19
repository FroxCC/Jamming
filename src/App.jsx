import React, { useState } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SearchResults'

const App = () => {
  const hardCodedTracks = [
    { id: '1', name: 'Sonne', artist: 'Rammstein', album: 'Mutter' },
    { id: '2', name: 'Ich Will', artist: 'Rammstein', album: 'Mutter' },
    { id: '3', name: 'Last nite', artist: 'The Strokes', album: 'Is this it' },
    { id: '4', name: 'The Adults Are Talking', artist: 'The Strokes', album: 'The new abnormal' },
  ];

  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (searchTerm) => {
    const filteredTracks = hardCodedTracks.filter((track) =>
      track.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      track.artist.toLowerCase().includes(searchTerm.toLowerCase()) ||
      track.album.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setSearchResults(filteredTracks);
    console.log(filteredTracks)
  };

  return (
    <div>
      <h1>BTJ Jamming App</h1>
      <SearchBar onSearch={handleSearch} />
      <SearchResults results={searchResults}/>
    </div>
  );
};

export default App;