import { getFactory } from "@/actions/factory"
import { FactoryOrderStatus } from "./components/factory-order-status"
import { getFactoryOrders } from "@/actions/factory-order"

const SupplyOrderQueryPage = async () => {
	const factory = await getFactory()
	const factoryOrders = await getFactoryOrders()

    return (
		<div className="w-full h-full p-10 space-y-8 flex flex-col justify-start bg-neutral-500/90 rounded-[32px] overflow-hidden">
			<div className="text-primary-foreground font-bold space-y-2">
				<div className="text-sm">SHEIN 數位轉型計畫</div>
				<div className="text-4xl">工廠訂單查詢系統</div>
			</div>
			<FactoryOrderStatus factory={factory} orders={factoryOrders} />
		</div>
	)
}

export default SupplyOrderQueryPage