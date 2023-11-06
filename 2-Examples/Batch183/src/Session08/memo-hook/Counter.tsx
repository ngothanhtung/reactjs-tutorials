import React from 'react';
type Props = {
  text: string;
  count: number;
};
function Counter({ text, count }: Props) {
  console.log(`Rendering ${text}`);
  return (
    <div>
      {text} - {count}
    </div>
  );
}

// export default Counter;
export default React.memo(Counter);
