import React from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

function Search() {
  let location = useLocation();
  let [params] = useSearchParams();

  let name = params.get('name');
  let age = params.get('age');
  let address = params.get('address');

  console.log(location);
  console.log(name, age, address);

  return (
    <div>
      <h1>Search</h1>
      <hr />
      <div>
        Name: <strong>{name}</strong>
      </div>
      <div>
        Age: <strong>{age}</strong>
      </div>
      <div>
        Address: <strong>{address}</strong>
      </div>
    </div>
  );
}

export default Search;
