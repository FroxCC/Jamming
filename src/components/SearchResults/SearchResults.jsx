import React from 'react';

const SearchResults = ({ results }) => {
  return (
    <div>
      {results.length > 0 ? (
        <div>
          <h2>Search Results:</h2>
          <ul>
            {results.map((track) => (
              <li key={track.id}>
                {`${track.name} by ${track.artist} (Album: ${track.album})`}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
};

export default SearchResults;
