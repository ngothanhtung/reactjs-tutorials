import React from 'react';

type Props = {};

export default function MountingExample({}: Props) {
  const [count, setCount] = React.useState(0);
  const [count2, setCount2] = React.useState(100);

  // Mounting: Chạy 1 lần duy nhất khi component được render lần đầu tiên
  React.useEffect(() => {
    console.log('MountingExample: MOUNTING');
    // Thường dùng khi nào?
    // - Gọi API
    // - Tạo 1 interval
    // - Tạo 1 event listener

    // Tạo 1 interval 5s chạy 1 lần
    // const intervalId = setInterval(() => {
    //   console.log('Interval');
    // }, 1000);

    // return () => {
    //   clearInterval(intervalId);
    // };
  }, []);

  // Unmounting: Chạy 1 lần duy nhất khi component bị xóa khỏi DOM
  React.useEffect(() => {
    return () => {
      console.log('MountingExample: UNMOUNTING');
    };
  }, []);

  // Updating: Chạy mỗi khi component được render lại
  React.useEffect(() => {
    console.log('MountingExample: UPDATING');
  });

  // Updating (Dependencies): Chạy mỗi khi component được render lại và giá trị của dependencies thay đổi
  React.useEffect(() => {
    console.log('MountingExample: UPDATING COUNT 1');
  }, [count]);

  // Updating (Dependencies): Chạy mỗi khi component được render lại và giá trị của dependencies thay đổi
  React.useEffect(() => {
    console.log('MountingExample: UPDATING COUNT 2');
  }, [count2]);

  return (
    <div>
      <h1>Mounting Example</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase Count
      </button>

      <button
        onClick={() => {
          setCount2(count2 + 1);
        }}
      >
        Increase Count 2
      </button>
    </div>
  );
}
