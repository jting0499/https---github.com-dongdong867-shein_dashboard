"use client"

// types
import { FactoryOrder } from "@/types/factory-order"
import { Factory } from "@/types/factory"

import React, { useState } from "react"
import { FactoryDetail } from "./factory-detail"
import { OrderSearch } from "./order-search"

export const FactoryOrderStatus = ({
	factory,
	orders
}: {
	factory: Factory[]
	orders: FactoryOrder[]
}) => {
	const [searchOrderId, setSearchOrderId] = useState("")
	const [searchFactoryName, setSearchFactoryName] = useState("")

	return (
		<div className="w-full h-max space-y-4">
			<OrderSearch
				setSearchFactoryName={setSearchFactoryName}
				setSearchOrderId={setSearchOrderId}
			/>
			<div className="w-full h-max flex flex-col justify-start place-items-start rounded-[32px] bg-base/90 overflow-hidden">
				<div className="w-full flex justify-between place-items-center px-7 pt-7">
					<div className="w-full h-max -space-y-1 font-bold mb-4">
						<div className="text-2xl">工廠資訊及生產進度</div>
						<div className="w-full h-full p-7 flex flex-wrap gap-6">
							{factory.map((factory) => {
								if (
									searchFactoryName == "" ||
									searchOrderId == "" ||
									(factory.name == searchFactoryName &&
										factory.schedule.some((order) => order.orderId === searchOrderId))
								) {
									const factoryOrders = orders.filter((o) =>
										factory.schedule.some((schedule) => schedule.orderId === o.orderId)
									)
									return <FactoryDetail key={factory.id} factory={factory} order={factoryOrders} />
								}
							})}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
