"use server"

import { adminFirestore } from "@/lib/firestore"
import { SafetyStorage } from "@/types/safety-storage"
import { cache } from "react"

export const getSafetyStorage = cache(async (): Promise<SafetyStorage[]> => {
	const docs = await adminFirestore.collection("safetyStorage").get()

  if (docs.size == 0) throw new Error("error occurred when fetching safety storage")

  const safetyStorage = [] as SafetyStorage[]
  docs.forEach(doc => {
    const data = doc.data()
    safetyStorage.push(
      SafetyStorage.parse({
        id: data.id,
        name: data.name,
        currentStorage: data.current,
        pastSafetyStorage: data.pastSafetyStorage,
        pastSales: data.pastSales
      })
    )
  })


  return safetyStorage
})
