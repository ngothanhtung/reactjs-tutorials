import React from 'react';
import { AiFillHeart } from 'react-icons/ai';

function LoveButton() {
  const [loved, setLoved] = React.useState(false);

  const onClick = () => {
    setLoved(!loved);
  };

  return (
    <React.Fragment>
      <AiFillHeart style={{ color: loved ? 'red' : '#bdc3c7' }} onClick={onClick} />
    </React.Fragment>
  );
}

export default LoveButton;
