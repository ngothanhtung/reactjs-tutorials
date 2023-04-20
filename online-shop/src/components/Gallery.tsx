import React from 'react';

type Props = {};

export default function Gallery({}: Props) {
  const [image, setImage] = React.useState(1);

  return (
    <div>
      <img src={`/images/gallery/${image}.jpeg`} style={{ width: '100%' }} alt='' />
      <button
        onClick={() => {
          if (image > 1) {
            setImage((x) => x - 1);
          }
        }}
      >
        PREVIOUS
      </button>
      {image} / 5
      <button
        onClick={() => {
          if (image < 5) {
            setImage((x) => x + 1);
          }
        }}
      >
        NEXT
      </button>
      <div>
        {[1, 2, 3, 4, 5].map((i) => {
          return (
            <img
              src={`/images/gallery/${i}.jpeg`}
              style={{ width: 120, height: 120 }}
              onClick={() => {
                setImage(i);
              }}
              alt=''
            />
          );
        })}
      </div>
    </div>
  );
}
