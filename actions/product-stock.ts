"use server"

// utils
import { cache } from "react"
import { adminFirestore } from "@/lib/firestore"
// types
import { ProductStock } from "@/types/product-stock"

export const getProductStock = cache(
	async (productId: string): Promise<{ productName: string; productStock: ProductStock[] }> => {
		const productDoc = await adminFirestore.collection("product").doc(productId).get()
		if (!productDoc.exists) return { productName: "not found", productStock: [] }

		const productName = productDoc.data()!.name

		const docs = await adminFirestore.collection("storage").get()
		if (docs.size == 0) return { productName: productName, productStock: [] }

		const productStock = [] as ProductStock[]
		docs.forEach((doc) => {
			const data = doc.data()
			const product = data.products[productId]
			if (product) {
				productStock.push(
					ProductStock.parse({
						storageId: data.id,
						storageName: data.name,
						averageShipping: product.averageShipping,
						periodCount: product.periodCount,
						amount: product.amount
					})
				)
			}
		})

		return { productName: productName, productStock: productStock }
	}
)
