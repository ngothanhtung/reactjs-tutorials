import React from 'react';
import { ColorPicker, theme } from 'antd';
import type { Color } from 'antd/es/color-picker';

type Props = {};

export default function ColorPickerExamples({}: Props) {
  const { token } = theme.useToken();
  const [color, setColor] = React.useState<Color | string>(token.colorPrimary);
  return (
    <div>
      <ColorPicker
        showText
        value={color}
        // onChange={(value, hex) => {
        //   console.log(value, hex);
        //   setColor(hex);
        // }}
        onChangeComplete={(hex) => {
          console.log(hex);
          setColor(hex);
        }}
      />
    </div>
  );
}
