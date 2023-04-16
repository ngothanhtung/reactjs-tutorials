import React from 'react';
import Time from './Time';
import Summary from './Summary';
import Section from './Section';

type Props = {};

export default function Experience({}: Props) {
  return (
    <div>
      <Section title='EXPERIENCE' />
      <div style={{ display: 'flex', alignItems: 'center', marginLeft: 48 }}>
        <div style={{ flex: 2 }}>
          <Time year='2010-2014' title='High School: Bùi Thị Xuân' />
        </div>
        <div style={{ width: 48 }} />
        <div style={{ flex: 3 }}>
          <Summary />
        </div>
        <div style={{ width: 72 }} />
      </div>

      <div style={{ display: 'flex', alignItems: 'center', marginLeft: 48 }}>
        <div style={{ flex: 2 }}>
          <Time year='2010-2014' title='High School: Bùi Thị Xuân' />
        </div>
        <div style={{ width: 48 }} />
        <div style={{ flex: 3 }}>
          <Summary />
        </div>
        <div style={{ width: 72 }} />
      </div>

      <div style={{ display: 'flex', alignItems: 'center', marginLeft: 48 }}>
        <div style={{ flex: 2 }}>
          <Time year='2010-2014' title='High School: Bùi Thị Xuân' />
        </div>
        <div style={{ width: 48 }} />
        <div style={{ flex: 3 }}>
          <Summary />
        </div>
        <div style={{ width: 72 }} />
      </div>

      <div style={{ display: 'flex', alignItems: 'center', marginLeft: 48 }}>
        <div style={{ flex: 2 }}>
          <Time year='2010-2014' title='High School: Bùi Thị Xuân' />
        </div>
        <div style={{ width: 48 }} />
        <div style={{ flex: 3 }}>
          <Summary />
        </div>
        <div style={{ width: 72 }} />
      </div>
    </div>
  );
}
