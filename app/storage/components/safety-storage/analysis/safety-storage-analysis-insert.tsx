"use client"

// components
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
// icons
import { FaPlus } from "react-icons/fa6"
import { useState } from "react"

export const SafetyStorageAnalysisInsert = ({
	handleIdInsert
}: {
	handleIdInsert: (insertedId: string) => void
}) => {
	const [productId, setProductId] = useState("")

	const handleClick = () => {
		handleIdInsert(productId)
		setProductId("")
	}

	return (
		<div className="w-full flex justify-end place-items-center space-x-2">
			<Input
				placeholder="輸入商品編號..."
				value={productId}
				onChange={(e) => setProductId(e.target.value)}
				className="w-full xl:w-3/5 px-4"
			/>
			<Button
				onClick={handleClick}
				variant={"default"}
				asChild
				className="w-[32.5px] h-[32.5px] p-1 cursor-pointer"
			>
				<FaPlus size={40} />
			</Button>
		</div>
	)
}
