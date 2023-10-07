import React from 'react';
import { AiFillHeart } from 'react-icons/ai';

export default function LoveButton() {
  const [loved, setLoved] = React.useState(false);

  const onClick = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    e.preventDefault();
    setLoved(!loved);
  };

  return (
    <React.Fragment>
      <AiFillHeart style={{ color: loved ? 'red' : '#bdc3c7' }} onClick={onClick} />
    </React.Fragment>
  );
}
