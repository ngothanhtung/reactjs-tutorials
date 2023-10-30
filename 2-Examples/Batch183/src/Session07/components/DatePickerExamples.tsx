import React from 'react';
import { DatePicker } from 'antd';
import { set } from 'react-hook-form';
type Props = {};

export default function DatePickerExamples({}: Props) {
  const [date, setDate] = React.useState<string>(); // [1
  return (
    <div>
      <DatePicker
        onChange={(date, dateString) => {
          console.log(date, dateString);
          setDate(dateString);
        }}
      />

      <h2>{date}</h2>
    </div>
  );
}
