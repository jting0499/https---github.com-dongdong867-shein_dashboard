import { FactoryOrderModal } from "."
import { getFactoryOrders } from "@/actions/factory-order"

export const FactoryOrders = async () => {
	const orders = await getFactoryOrders()

	return (
		<div className="h-full flex flex-col space-y-4 2xl:space-y-6 px-5 py-7 2xl:p-7 bg-neutral-500/90 rounded-[32px] overflow-hidden overflow-y-scroll">
			<div className="text-primary-foreground text-3xl font-bold mb-3">工廠訂單狀態</div>
			{orders.length > 0 ? (
				orders.map((order) => (
					<FactoryOrderModal
						key={order.orderId}
						orderId={order.orderId}
						orderDate={order.createAt}
						status={order.status}
						percentage={order.schedulePercentage}
					/>
				))
			) : (
				<div className="pt-6 text-center text-base font-medium">No factory order found.</div>
			)}
		</div>
	)
}
