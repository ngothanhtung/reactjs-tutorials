// https://jsonplaceholder.typicode.com/

import React from 'react';

type Props = {};

export default function CallApi({}: Props) {
  const [posts, setPosts] = React.useState<any>([]);
  const [photos, setPhotos] = React.useState<any>([]);

  // Syntax: async / await
  const getPosts = async () => {
    console.log('getPosts: BEGIN');
    const url = 'https://jsonplaceholder.typicode.com/posts';
    const response = await fetch(url);
    const data = await response.json();
    setPosts(data);
    console.log('getPosts: END');
  };

  const getPhotos = async () => {
    console.log('getPhotos: BEGIN');
    const url = 'https://jsonplaceholder.typicode.com/photos';
    const response = await fetch(url);
    const data = await response.json();
    setPhotos(data);
    console.log('getPhotos: END');
  };

  // Syntax: Promise
  // const getPosts = () => {
  //   const url = 'https://jsonplaceholder.typicode.com/posts';
  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((data) => setPosts(data));
  // };

  React.useEffect(() => {
    getPhotos();
    getPosts();
  }, []);

  // console.log('render');

  return (
    <div>
      {posts.length === 0 && <p>Loading...</p>}
      <button onClick={getPosts}>Get Posts</button>

      <ul>
        {posts.map((post: any) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
