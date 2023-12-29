"use client"

// hooks
import { useState } from "react"
// components
import { SafetyStorageModal } from "./safety-storage-modal"
import { SafetyStorageFilter } from "./safety-storage-filter"
import { SafetyStorage as SafetyStorageType } from "@/types/safety-storage"

export const SafetyStorage = ({ data }: { data: SafetyStorageType[] }) => {
	const [filter, setFilter] = useState("all")

	const getLastSafetyStorage = (pastSafetyStorage: { month: string; value: number }[]) => {
		const date = new Date()
		const month = date.getMonth() == 1 ? 12 : date.getMonth() - 1
		const year = month == 12 ? date.getFullYear() - 1 : date.getFullYear()

		return pastSafetyStorage.filter((safetyStorage) => safetyStorage.month == year + "/" + month)[0]
			.value
	}

	const getSafetyStoragePercentage = (
		currentStorage: number,
		lastSafetyStorage: number,
		pastSales: { month: string; value: number }[]
	) => {
		let pastSalesSum = 0
		pastSales.forEach((sales) => (pastSalesSum += sales.value))

		return currentStorage / (((lastSafetyStorage + pastSalesSum) * 2) / (pastSales.length + 1))
	}

	return (
		<div className="w-full h-max min-h-[400px] py-7 flex flex-col justify-start place-items-start rounded-[32px] bg-base/90">
			<div className="w-full flex justify-between place-items-end px-7 mb-4">
				<div className="w-full h-max -space-y-1 font-bold">
					<div className="text-2xl">安全庫存查詢</div>
					<div className="text-sm">資料時間: 3204/2/30 25:61</div>
				</div>
				<SafetyStorageFilter setFilter={setFilter} />
			</div>
			<div className="w-full h-full flex justify-start place-items-center space-x-4 overflow-y-scroll pl-7">
				{data.map((safetyStorage) => {
					const safetyStoragePercentage = getSafetyStoragePercentage(
						safetyStorage.currentStorage,
						getLastSafetyStorage(safetyStorage.pastSafetyStorage),
						safetyStorage.pastSales
					)

					const safetyStorageModal = (
						<SafetyStorageModal
							key={safetyStorage.id}
							safetyStoragePercentage={safetyStoragePercentage}
							productId={safetyStorage.id}
							productName={safetyStorage.name}
						/>
					)

					if (filter === "all") return safetyStorageModal
					else if (filter === "good") {
						if (safetyStoragePercentage > 1.2) return safetyStorageModal
					} else if (filter === "bad") {
						if (safetyStoragePercentage < 0.8) return safetyStorageModal
					} else {
						if (safetyStoragePercentage <= 1.2 && safetyStoragePercentage >= 0.8)
							return safetyStorageModal
					}
				})}
			</div>
		</div>
	)
}
