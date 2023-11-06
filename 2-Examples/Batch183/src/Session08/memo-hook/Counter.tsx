import React from 'react';
type Props = {
  text: string;
  count: number;
};
function Count({ text, count }: Props) {
  console.log(`Rendering ${text}`);
  return (
    <div>
      {text} - {count}
    </div>
  );
}

export default Count;
// export default React.memo(Count);
