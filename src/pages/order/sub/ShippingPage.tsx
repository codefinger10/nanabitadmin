import React, { useState } from "react";
import ShipHeader from "../item/ShipHeader";
import ShippingTable from "../../../components/order/orderSlect/table/ShippingTable";
import ShippingFooter from "../item/footer/ShippingFooter";

const ShippingPage = () => {
  const [dataFromChild, setDataFromChild] = useState("");
  const handleClickTableuum = (data: any) => {
    setDataFromChild(data);
  };
  return (
    <div>
      Shipping
      <ShipHeader />
      <ShippingTable tableNum={handleClickTableuum} />
      <ShippingFooter />
    </div>
  );
};

export default ShippingPage;