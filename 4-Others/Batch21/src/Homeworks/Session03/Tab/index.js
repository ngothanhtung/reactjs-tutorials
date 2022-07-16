import React from 'react';
import styles from './tab.module.css';
const defaultTabs = [
  {
    title: 'Tab 1',
    content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam',
  },
  {
    title: 'Tab 2',
    content: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius',
  },
  {
    title: 'Tab 3',
    content: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos',
  },
  {
    title: 'Tab 4',
    content: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos',
  },
  {
    title: 'Tab 5',
    content: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos',
  },
];

function Tab({ tabs = defaultTabs }) {
  const [selectedTabIndex, setSelectedTabIndex] = React.useState(2);

  return (
    <div>
      <div className={styles.tab_container}>
        {tabs.map((item, index) => {
          const isActiveTab = index === selectedTabIndex;
          return (
            <button
              onClick={() => {
                setSelectedTabIndex(index);
              }}
              className={styles.tab_title}
              style={{
                color: isActiveTab ? 'white' : '#666666',

                backgroundColor: isActiveTab ? 'green' : '#EEEEEE',
              }}
            >
              {item.title}
            </button>
          );
        })}
      </div>
      <div className={styles.tab_content}>
        {tabs.map((item, index) => {
          if (index === selectedTabIndex) {
            return <div>{item.content}</div>;
          }
          return null;
        })}
      </div>
    </div>
  );
}

export default Tab;
