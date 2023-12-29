"use client"

// hooks
import React, { useState } from "react"
// icons
import { IoSearch } from "react-icons/io5"
// components
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

type OrderSearchProps = {
	setSearchOrderId: React.Dispatch<React.SetStateAction<string>>
	setSearchFactoryName: React.Dispatch<React.SetStateAction<string>>
}

export const OrderSearch = ({ setSearchFactoryName, setSearchOrderId }: OrderSearchProps) => {
	const [factoryName, setFactoryName] = useState("")
	const [orderId, setOrderId] = useState("")

	return (
		<div className="flex flex-row justify-between place-items-center border-gray-300">
			<div className="w-full flex place-items-center space-x-2">
				<Input
					placeholder="輸入工廠名稱..."
					className="w-full xl:w-1/2"
					onChange={(e) => setFactoryName(e.target.value)}
				/>
				<Button
					variant={"default"}
					asChild
					className="w-[32.5px] h-[32.5px] p-1 cursor-pointer"
					onClick={() => {
						setSearchFactoryName(factoryName)
						setFactoryName("")
					}}
				>
					<IoSearch size={40} />
				</Button>
			</div>
			<div className="w-full flex place-items-center space-x-2">
				<Input
					placeholder="輸入訂單編號..."
					className="w-full xl:w-1/2"
					onChange={(e) => setOrderId(e.target.value)}
				/>
				<Button
					variant={"default"}
					asChild
					className="w-[32.5px] h-[32.5px] p-1 cursor-pointer"
					onClick={() => {
						setSearchOrderId(orderId)
						setOrderId("")
					}}
				>
					<IoSearch size={40} />
				</Button>
			</div>
		</div>
	)
}
