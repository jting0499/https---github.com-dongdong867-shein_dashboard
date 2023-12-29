"use client"

// hooks
import { useState } from "react"
// types
import { type SetStateAction } from "react"
import { ProductStock } from "@/types/product-stock"
// components
import { IoSearch } from "react-icons/io5"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

type ProductStockSearchProps = {
	setData: React.Dispatch<SetStateAction<{ productName: string; productStock: ProductStock[] }>>
}

export const ProductStockSearch = ({ setData }: ProductStockSearchProps) => {
	const [productId, setProductId] = useState("")
	return (
		<div className="w-full flex justify-end place-items-center space-x-2">
			<Input
				placeholder="輸入商品編號..."
				type="text"
				onChange={(e) => setProductId(e.target.value)}
				className="w-full xl:w-3/5 px-4"
			/>
			<Button
				type="submit"
				variant={"default"}
				onClick={async () => {
					if(productId == "") return
					const res = await fetch(`/api/product-stock?productId=${productId}`, { method: "GET" })
					const data: { productName: string; productStock: ProductStock[] } = await res.json()
					setData(data)
				}}
				className="w-[32.5px] h-[32.5px] p-1 cursor-pointer"
			>
				<IoSearch size={40} />
			</Button>
		</div>
	)
}
