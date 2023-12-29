// import { ProductStock } from "./components/product-stock"
// import { StockStatus } from "./components/stock-status"

import { CustomerCluster } from "./components/customer-cluster/customer_cluster"
import { CustomerOrder } from "./components/customer-order/customer_order"

const CustomerPage = () => {
    return (
		<div className="w-full h-full p-10 space-y-8 flex flex-col justify-start bg-neutral-500/90 rounded-[32px] overflow-hidden">
			<div className="text-primary-foreground font-bold space-y-2">
				<div className="text-sm">SHEIN 數位轉型計畫</div>
				<div className="text-4xl">顧客管理系統</div>
			</div>
            <CustomerCluster />
            <CustomerOrder />
			{/* <StockStatus />
			<ProductStock /> */}
		</div>
	)
}

export default CustomerPage