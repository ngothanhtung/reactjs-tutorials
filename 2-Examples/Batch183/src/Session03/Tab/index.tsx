import React from 'react';
import styles from './Tab.module.css';
import classnames from 'classnames';

const defaultTabs = [
  {
    title: 'HTML',
    content:
      'HTML là ngôn ngữ đánh dấu siêu văn bản (HyperText Markup Language) dùng để tạo nên các trang web. HTML không phải là ngôn ngữ lập trình, mà là ngôn ngữ dùng để mô tả cấu trúc của một trang web. HTML sử dụng các thẻ (tag) để đánh dấu nội dung.',
  },
  {
    title: 'REACT',
    content:
      'Là một thư viện JavaScript được dùng để xây dựng giao diện người dùng. React được tạo ra bởi Facebook và được cung cấp miễn phí cho mọi người sử dụng. React được sử dụng bởi nhiều trang web nổi tiếng như Facebook, Instagram, Twitter, Netflix,..',
  },
  {
    title: 'NODEJS',
    content: 'Node.js là một nền tảng phát triển được xây dựng trên nền tảng JavaScript Runtime của Chrome (V8 Engine). Node.js được sử dụng để xây dựng các ứng dụng mạng có khả năng xử lý đa luồng với các thao tác I/O phức tạp.',
  },
  {
    title: 'NEXTJS',
    content: 'Next.js là một framework ReactJS, giúp xây dựng các ứng dụng web tĩnh hoặc động. Next.js cung cấp cho chúng ta một cách dễ dàng để xây dựng các ứng dụng web ReactJS với các tính năng như routing, code-splitting, SSR, etc.',
  },
  {
    title: 'PROJECT',
    content: 'Đây là project cuối khóa. Trong project này, chúng ta sẽ xây dựng một ứng dụng web hoàn chỉnh với các tính năng như: đăng nhập, đăng ký, quản lý sản phẩm, giỏ hàng, thanh toán,..',
  },
];

function Tab({ tabs = defaultTabs }) {
  const [selectedTabIndex, setSelectedTabIndex] = React.useState(0);

  return (
    <div>
      <div className={styles.tabContainer}>
        {tabs.map((item, index) => {
          return (
            <button
              key={index}
              onClick={() => {
                setSelectedTabIndex(index);
              }}
              className={classnames(styles.tabButton, index === selectedTabIndex ? styles.active : styles.inactive)}
            >
              {item.title}
            </button>
          );
        })}
      </div>
      <div className={styles.tabContent}>{tabs[selectedTabIndex].content}</div>
    </div>
  );
}

export default Tab;
