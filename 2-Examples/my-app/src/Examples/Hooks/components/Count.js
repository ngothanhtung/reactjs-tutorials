import React from 'react';

function Count({ text, count }) {
  console.log(`Render Count: ${text}`);
  return (
    <div>
      {text} - {count}
    </div>
  );
}

// export default Count;
// export default Count;
export default React.memo(Count);
