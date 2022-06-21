import React from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

function Search() {
  let location = useLocation();
  let [params] = useSearchParams();

  let name = params.get('name');
  let age = params.get('age');

  console.log(location);
  console.log(name, age);

  return <div>Search</div>;
}

export default Search;
