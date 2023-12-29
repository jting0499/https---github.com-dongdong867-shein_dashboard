import { z } from "zod"

export const FactoryOrder = z.object({
	orderId: z.string(),
	factoryId: z.string(),
	productId: z.string(),
	amount: z.number(),
	schedulePercentage: z.number(),
	status: z.enum(["inline", "processing", "shipping"]),
	createAt: z.coerce.date()
})

export type FactoryOrder = z.infer<typeof FactoryOrder>
