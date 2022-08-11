import React from 'react';
import { IoHomeOutline, IoPersonOutline, IoChatbubbleOutline, IoCameraOutline, IoSettingsOutline } from 'react-icons/io5';
import { BrowserRouter, Link, Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Messages from './pages/Messages';
import Photos from './pages/Photos';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import './styles.css';

const items = [
  {
    icon: <IoHomeOutline />,
    text: 'Home',
    path: '/',
    element: <Home />,
  },
  {
    icon: <IoPersonOutline />,
    text: 'Profile',
    path: '/profile',
    element: <Profile />,
  },
  {
    icon: <IoChatbubbleOutline />,
    text: 'Messages',
    path: '/messages',
    element: <Messages />,
  },
  {
    icon: <IoCameraOutline />,
    text: 'Photos',
    path: '/photos',
    element: <Photos />,
  },
  {
    icon: <IoSettingsOutline />,
    text: 'Settings',
    path: '/settings',
    element: <Settings />,
  },
];

function MagicReactRoute() {
  const path = document.location.pathname;
  let currentIndex = items.findIndex((item) => item.path === path);

  const [active, setActive] = React.useState(currentIndex);

  return (
    <React.Fragment>
      <BrowserRouter>
        <div id='magic'>
          <div className='content'>
            {/* ROUTES SETTINGS */}
            <Routes>
              {items.map((item, index) => {
                return <Route key={index} path={item.path} element={item.element} />;
              })}
            </Routes>
          </div>
          <div className='navigation'>
            <ul>
              {items.map((item, index) => {
                return (
                  <li
                    key={index}
                    className={'list ' + (index === active ? 'active' : '')}
                    onClick={() => {
                      setActive(index);
                    }}
                  >
                    <Link to={item.path}>
                      <span className='icon'>{item.icon}</span>
                      <span className='text'>{item.text}</span>
                    </Link>
                  </li>
                );
              })}

              <div
                className='indicator'
                style={{
                  transform: `translateX(calc(70px * ${active}))`,
                }}
              ></div>
            </ul>
          </div>
        </div>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default MagicReactRoute;
