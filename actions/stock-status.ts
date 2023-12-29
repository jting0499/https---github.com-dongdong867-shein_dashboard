"use server"

// utils
import { cache } from "react"
import { adminFirestore } from "@/lib/firestore"
// types
import { StockStatus } from "@/types/stock-status"

export const getStockStatus = cache(
	async (): Promise<{
		stockStatus: StockStatus[]
		updateAt: string
	}> => {
		const docs = await adminFirestore.collection("storage").get()

		if (docs.size == 0) throw new Error("error on fetching stock status.")

		const stockStatus = [] as StockStatus[]
		docs.forEach((doc) => {
			const data = doc.data()
			stockStatus.push(
				StockStatus.parse({
					id: data.id,
					name: data.name,
					stock: data.stock,
					capacity: data.capacity
				})
			)
		})

		return { stockStatus: stockStatus, updateAt: new Date().toLocaleString() }
	}
)
