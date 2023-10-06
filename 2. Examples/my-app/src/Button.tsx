import React from 'react';

type Props = {
  text?: string; // optional
  color?: string; // optional
  icon?: React.ReactNode;
};

export default function Button({ text = 'Button Text', color = '#c0392b', icon }: Props) {
  return (
    <div
      style={{
        height: 48,
        width: 120,
        backgroundColor: color,
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
        borderRadius: 4,
        marginBottom: 8,
      }}
    >
      {icon && <div style={{ marginRight: 8 }}>{icon}</div>}
      {text}
    </div>
  );
}
