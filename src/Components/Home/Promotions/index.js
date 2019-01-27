import React from "react";
import PromotionsAnimations from "./Animations";
import Form from "./Form";

const Promotions = () => {
  return (
    <div className="promotion_wrapper" style={{ background: "#ffffff" }}>
      <div className="container">
        <PromotionsAnimations />
        <Form />
      </div>
    </div>
  );
};

export default Promotions;
