import { z } from "zod"

export const StockStatus = z.object({
	id: z.string(),
	name: z.string(),
	stock: z.number(),
	capacity: z.number()
})

export type StockStatus = z.infer<typeof StockStatus>
