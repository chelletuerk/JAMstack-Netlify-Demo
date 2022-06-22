import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom';


export default function Search() {
  const searchClient = algoliasearch('J3WN417RXB', 'b9140c255c86b0f0ee283ab2c700ca57');
  const indexName = algoliasearch('netlify_8291fd2f-32f9-4b82-aef4-9a702b45a98c_main_all');
  return (
    <InstantSearch searchClient={searchClient} indexName={indexName}>
      <SearchBox />
      <Hits />
    </InstantSearch>
 )};
