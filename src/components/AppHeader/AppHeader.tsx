import React from 'react';

export function AppHeader(props: { title: string }) {
  return (
    <div className="flex items-center min-w-full h-16 p-2 font-semibold text-2xl ">
      <div>{props.title}</div>
    </div>
  );
}
