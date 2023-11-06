import React from 'react';

type Props = {
  source: string;
};

const ForwardRef = React.forwardRef<HTMLAudioElement, Props>((props: Props, ref) => {
  return (
    <div>
      <audio style={{ display: 'none' }} controls src={props.source} autoPlay={false} preload='auto' ref={ref} />
    </div>
  );
});

export default ForwardRef;
