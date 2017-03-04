

export default function chunkMatchesSearchQuery (chunk = {}, searchQuery = '') {
  return searchQuery && 
          searchQuery.length && 
          chunk.content &&
          chunk.content.toLowerCase.indexOf(searchQuery.toLowerCase()) === -1
          ? false 
          : true;
}