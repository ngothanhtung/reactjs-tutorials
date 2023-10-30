import React from 'react';
import { AutoComplete } from 'antd';

// Football Clubs
const options = [
  {
    value: 'Manchester United',
  },
  {
    value: 'Liverpool',
  },
  {
    value: 'Manchester City',
  },
  {
    value: 'Chelsea',
  },
  {
    value: 'Arsenal',
  },
  {
    value: 'Tottenham Hotspur',
  },
  {
    value: 'Everton',
  },
  {
    value: 'Leicester City',
  },
  {
    value: 'West Ham United',
  },
  {
    value: 'Aston Villa',
  },
  {
    value: 'Newcastle United',
  },
  {
    value: 'Wolverhampton Wanderers',
  },
  {
    value: 'Crystal Palace',
  },
  {
    value: 'Southampton',
  },
  {
    value: 'Brighton & Hove Albion',
  },
  {
    value: 'Burnley',
  },
  {
    value: 'Norwich City',
  },
  {
    value: 'Watford',
  },
  {
    value: 'Bournemouth',
  },
  {
    value: 'Sheffield United',
  },
];

type Props = {};

export default function AutocompleteExamples({}: Props) {
  return (
    <div>
      <AutoComplete
        options={options}
        style={{ width: 200 }}
        onSelect={(item) => {
          console.log(item);
        }}
        onSearch={(searchText: string) => {
          console.log('onSearch', searchText);
        }}
        filterOption={(inputValue, option) => {
          return option!.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1;
        }}
      />
    </div>
  );
}
