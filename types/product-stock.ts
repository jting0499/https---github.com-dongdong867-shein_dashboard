import { z } from "zod"

export const ProductStock = z.object({
	storageId: z.string(),
	storageName: z.string(),
	averageShipping: z.number(),
	periodCount: z.number(),
	amount: z.number()
})

export type ProductStock = z.infer<typeof ProductStock>
