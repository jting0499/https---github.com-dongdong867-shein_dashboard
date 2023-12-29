import { SafetyStorage, SafetyStorageAnalysis } from "./components/safety-storage"
import { ProductStock } from "./components/product-stock"
import { StockStatus } from "./components/stock-status"
import { getSafetyStorage } from "@/actions/safety-storage"

const StoragePage = async () => {
	const safetyStorage = await getSafetyStorage()

	return (
		<div className="w-full h-full p-10 space-y-8 flex flex-col justify-start bg-neutral-500/90 rounded-[32px] overflow-hidden">
			<div className="text-primary-foreground font-bold space-y-2">
				<div className="text-sm">SHEIN 數位轉型計畫</div>
				<div className="text-4xl">倉儲管理系統</div>
			</div>
			<StockStatus />
			<ProductStock />
			<SafetyStorage data={safetyStorage} />
			<SafetyStorageAnalysis initialData={safetyStorage} />
		</div>
	)
}

export default StoragePage
