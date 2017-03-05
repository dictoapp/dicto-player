import React from 'react';

import './SearchComposition.scss';

const SearchComposition = ({
  searchQuery,
  onSearchQueryChange
}) => {
  const onSearchTermChange = (e) => onSearchQueryChange(e.target.value);
  return (
    <div className="dicto-player-SearchComposition">
      <input 
        type="text" 
        value={searchQuery}
        onChange={onSearchTermChange}
        placeholder="Chercher un terme"
      />
    </div>
  );
};

export default SearchComposition;