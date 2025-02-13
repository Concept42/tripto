import React from "react";

type Props = React.SVGProps<SVGSVGElement>;

const Chevron = ({ ...props }: Props) => {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg}" {...props}>
      <path d="M5 7.5L10 12.5L15 7.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export default Chevron;
