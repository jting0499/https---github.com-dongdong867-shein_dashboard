// types
import { Column, ColumnDef, SortDirection } from "@tanstack/react-table"
// components
import { Button } from "@/components/ui/button"
// icons
import { LuArrowDown01, LuArrowDown10, LuArrowDownUp } from "react-icons/lu"

const getSortingArrowIcon = (isSorted: false | SortDirection) => {
	return isSorted ? isSorted == "asc" ? <LuArrowDown01 /> : <LuArrowDown10 /> : <LuArrowDownUp />
}

const sortHandler = (isSorted: false | SortDirection, column: Column<CustomerOrder, unknown>) => {
	if (!isSorted) column.toggleSorting(false)
	else if (isSorted == "asc") column.toggleSorting(true)
	else column.clearSorting()
}

const SortButton = ({
	column,
	children
}: {
	column: Column<CustomerOrder, unknown>
	children: React.ReactNode
}) => {
	return (
		<div className="flex justify-center">
			<Button
				variant={"ghost"}
				onClick={() => sortHandler(column.getIsSorted(), column)}
				className="text-center hover:text-primary hover:bg-primary/10"
			>
				{children}
				{getSortingArrowIcon(column.getIsSorted())}
			</Button>
		</div>
	)
}

export const columns: ColumnDef<CustomerOrder>[] = [
	{
		accessorKey: "orderId",
		header: "訂單編號",
		cell: ({ row }) => <div className="lowercase pl-1">{row.getValue("orderId")}</div>
	},
	{
		accessorKey: "customerId",
		header: "顧客編號",
		cell: ({ row }) => <div className="lowercase">{row.getValue("customerId")}</div>
	},
	{
		accessorKey: "createdAt",
		header: ({ column }) => (
			<SortButton column={column}>
				<span className="pr-2">下單時間</span>
			</SortButton>
		),
		cell: ({ row }) => (
			<div className="lowercase text-center">{row.getValue("createdAt")}</div>
		)
	},
	{
		accessorKey: "price",
		header: ({ column }) => (
			<SortButton column={column}>
				<span className="pr-2">訂單金額</span>
			</SortButton>
		),
		cell: ({ row }) => <div className="lowercase text-center">{row.getValue("price")}</div>
	},
	{
		accessorKey: "products",
		header: ({ column }) => (
			<SortButton column={column}>
				<span className="pr-2">購買產品</span>
			</SortButton>
		),
		cell: ({ row }) => <div className="lowercase text-center">{row.getValue("products")}</div>
	}
]
