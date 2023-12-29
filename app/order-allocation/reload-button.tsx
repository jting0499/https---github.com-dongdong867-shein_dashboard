"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { IoReloadCircle } from "react-icons/io5";

const OrderStatusReloadButton = () => {
  const handleReloadClick = () => {
    window.location.reload(); // Reload the page
  };

  return (
    <div>
      <Button variant={"link"} size={"icon"} onClick={handleReloadClick}>
        <IoReloadCircle size={40} />
      </Button>
    </div>
  );
};

export default OrderStatusReloadButton;
