import React from "react";

type Props = React.SVGProps<SVGSVGElement>;

const ConnectArrow = ({ ...props }: Props) => {
  return (
    <svg width="43" height="18" viewBox="0 0 43 18" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M43 9L28 0.339746V17.6603L43 9ZM0 10.5H29.5V7.5H0V10.5Z" fill="#A9CFE4" />
    </svg>
  );
};

export default ConnectArrow;
