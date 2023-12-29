"use client"

// hooks
import { useState } from "react"
//utils
import { toast } from "sonner"
// types
import { Serie } from "@nivo/line"
// components
import { Toaster } from "@/components/ui/sonner"
import { SafetyStorage } from "@/types/safety-storage"
import { SafetyStorageAnalysisChart } from "./safety-storage-analysis-chart"
import { SafetyStorageAnalysisInsert } from "./safety-storage-analysis-insert"

export const SafetyStorageAnalysis = ({ initialData }: { initialData: SafetyStorage[] }) => {
	const data = [] as Serie[]
	initialData.forEach((safetyStorage) => {
		data.push({
			id: safetyStorage.name,
			productId: safetyStorage.id,
			data: safetyStorage.pastSafetyStorage.map((data) => {
				return { x: data.month, y: data.value }
			})
		})
	})

	const [idList, setIdList] = useState([] as string[])

	const handleIdInsert = (insertedId: string) => {
		if (idList.includes(insertedId)) {
			toast("Product Id already inserted.")
			return
		}

		if (data.filter((product) => product.productId == insertedId).length == 0) {
			toast("Product Id not found.")
			return
		}

		setIdList([...idList, insertedId])
	}

	return (
		<div className="w-full h-max min-h-[500px] flex flex-col justify-start place-items-start rounded-[32px] bg-base/90">
			<div className="w-full h-max flex justify-between place-items-center px-7 pt-7">
				<div className="w-full font-bold text-2xl">安全庫存分析</div>
				<SafetyStorageAnalysisInsert handleIdInsert={handleIdInsert} />
			</div>
			<div className="w-full h-full p-7">
				<div className="w-full h-full bg-background rounded-3xl">
					{idList.length == 0 ? (
						<div className="w-full h-full flex justify-center place-items-center text-sm">
							No Selected Product.
						</div>
					) : (
						<SafetyStorageAnalysisChart
							data={data.filter((product) => idList.includes(product.productId as string))}
						/>
					)}
				</div>
			</div>
			<Toaster />
		</div>
	)
}
