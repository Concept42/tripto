import React, { HTMLProps } from "react";

type Props = HTMLProps<SVGSVGElement>;

const TransparentCheckMark = ({ ...props }: Props) => {
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M14.9998 0.280273C6.88331 0.280273 0.279785 6.88379 0.279785 15.0003C0.279785 23.1174 6.88331 29.7203 14.9998 29.7203C23.1169 29.7203 29.7198 23.1174 29.7198 15.0003C29.7198 6.88379 23.1169 0.280273 14.9998 0.280273ZM21.9291 9.59995L14.562 20.4563L8.80395 15.1129C8.54475 14.8729 8.52938 14.4678 8.77003 14.2086C9.01003 13.9488 9.41579 13.9347 9.67435 14.1747L14.3399 18.5036L20.8699 8.88059C21.0689 8.58811 21.467 8.51259 21.7588 8.71035C22.0519 8.90875 22.1281 9.30683 21.9291 9.59995Z"
        fill="white"
      />
    </svg>
  );
};

export default TransparentCheckMark;
