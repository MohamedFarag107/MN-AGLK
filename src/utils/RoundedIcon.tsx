import React from 'react';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

function RoundedIcon({ children, className, ...restProps }: Props) {
  return (
    <div className={`rounded-icon  flex justify-center items-center cursor-pointer ${className}`} {...restProps}>
      {children}
    </div>
  );
}

export default RoundedIcon;
