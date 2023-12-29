import { getFactory } from "@/actions/factory";
import { OrderStatus } from "./components/order-status";
import { getFactoryOrders } from "@/actions/factory-order";

const SupplyOrderAllocationPage = async () => {
  const factories = await getFactory();
  const orders = await getFactoryOrders();

  return (
    <div className="w-full h-full p-10 space-y-8 flex flex-col justify-start bg-neutral-500/90 rounded-[32px] overflow-hidden">
      <div className="text-primary-foreground font-bold space-y-2">
        <div className="text-sm">SHEIN 數位轉型計畫</div>
        <div className="text-4xl">訂單分配及管理系統</div>
      </div>
      <OrderStatus factories={factories} orders={orders} />
    </div>
  );
};

export default SupplyOrderAllocationPage;
