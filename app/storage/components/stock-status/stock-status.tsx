import { getStockStatus } from "@/actions/stock-status"
import { StockStatusModal } from "."

export const StockStatus = async () => {
	const {stockStatus, updateAt} = await getStockStatus()

	return (
		<div className="w-full h-max min-h-[320px] flex flex-col justify-start place-items-start rounded-[32px] bg-base/90">
			<div className="w-full flex justify-between place-items-end px-7 pt-7 mb-2 -space-y-1 font-bold">
				<div className="text-2xl">實時倉庫容量概況</div>
				<div className="text-sm">資料時間: {updateAt}</div>
			</div>
			<div className="w-full h-full flex justify-start place-items-center space-x-4 overflow-y-scroll pl-7">
				{stockStatus.length > 0 ? (
					stockStatus.map((status) => (
						<StockStatusModal
							key={status.id}
							percentage={(status.stock / status.capacity) * 100}
							name={status.name}
						/>
					))
				) : (
					<div className="w-full -ml-7 text-center text-primary font-medium">No storage found.</div>
				)}
			</div>
		</div>
	)
}
