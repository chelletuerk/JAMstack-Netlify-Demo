import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom';

export default function Search() {
  const searchClient = algoliasearch('J3WN417RXB', 'b9140c255c86b0f0ee283ab2c700ca57');
  const Hit = ({ hit }) => <p>{hit.title.split('Buy')[1]}</p>;
  return (
    <InstantSearch searchClient={searchClient} indexName='netlify_8291fd2f-32f9-4b82-aef4-9a702b45a98c_main_all'>
      <SearchBox />
        <Hits hitComponent={Hit}/>
    </InstantSearch>
 )};
