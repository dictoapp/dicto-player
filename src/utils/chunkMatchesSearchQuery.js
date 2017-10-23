

export default function chunkMatchesSearchQuery (chunk = {}, searchQuery = '') {
  if (searchQuery && searchQuery.length) {
    if (chunk.content.toLowerCase().indexOf(searchQuery.toLowerCase()) > -1) {
      return true;
    }
 else if (chunk.tags) {
      const match = chunk.tags.find(tag => tag.name.toLowerCase().indexOf(searchQuery.toLowerCase()) > -1);
      return match !== undefined;
    }
    return false;
  }
 else return true;
}
