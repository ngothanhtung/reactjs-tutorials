import React from 'react';
import Page1 from './components/Page1';
import Page2 from './components/Page2';

type Props = {};

export default function Router({}: Props) {
  const [page, setPage] = React.useState('Page1');

  if (page === 'Page1')
    return (
      <div>
        <Page1 />
        <button
          onClick={() => {
            setPage('Page2');
            window.history.pushState({}, '', '/page2');
          }}
        >
          Go to page 2
        </button>
      </div>
    );
  return (
    <div>
      <Page2 />
      <button
        onClick={() => {
          setPage('Page1');
        }}
      >
        Go to page 1
      </button>
    </div>
  );
}
