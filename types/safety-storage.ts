import { z } from "zod"

export const SafetyStorage = z.object({
	id: z.string(),
	name: z.string(),
	currentStorage: z.number(),
	pastSafetyStorage: z.array(
		z.object({
			month: z.string(),
			value: z.number()
		})
	),
	pastSales: z.array(
		z.object({
			month: z.string(),
			value: z.number()
		})
	)
})

export type SafetyStorage = z.infer<typeof SafetyStorage>
