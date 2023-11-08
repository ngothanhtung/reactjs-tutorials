import React from 'react';
import { useParams } from 'react-router-dom';

export default function Parameters(props: any) {
  let params = useParams();
  console.log(params);
  return (
    <div>
      <h1>Parameters</h1>
      <hr />
      <div>
        Id: <strong>{params.id}</strong>
      </div>
      <div>
        Name: <strong>{params.name}</strong>
      </div>
    </div>
  );
}
