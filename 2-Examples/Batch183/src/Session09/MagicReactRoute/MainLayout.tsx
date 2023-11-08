import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { IoCameraOutline, IoChatbubbleOutline, IoHomeOutline, IoPersonOutline, IoSettingsOutline } from 'react-icons/io5';
type Props = {};

const items = [
  {
    icon: <IoHomeOutline />,
    text: 'Home',
    path: '/',
  },
  {
    icon: <IoPersonOutline />,
    text: 'Profile',
    path: '/profile',
  },
  {
    icon: <IoChatbubbleOutline />,
    text: 'Messages',
    path: '/messages',
  },
  {
    icon: <IoCameraOutline />,
    text: 'Photos',
    path: '/photos',
  },
  {
    icon: <IoSettingsOutline />,
    text: 'Settings',
    path: '/settings',
  },
];

export default function MainLayout({}: Props) {
  const location = useLocation();
  let currentIndex = items.findIndex((item) => item.path === location.pathname);
  console.log(location.pathname, currentIndex);
  const [active, setActive] = React.useState(currentIndex);
  return (
    <div id='magic'>
      <div className='content'>
        <Outlet />
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
  );
}
