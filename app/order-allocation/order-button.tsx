// 'order-button.tsx'
import React from "react";

type Props = {
  onClick?: () => void;
};

const OrderButton: React.FC<Props> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="mt-1 px-2 py-1 bg-gray-200 text-black rounded transition-all hover:bg-gray-600 hover:text-white"
    >
      分配訂單
    </button>
  );
};

export default OrderButton;
