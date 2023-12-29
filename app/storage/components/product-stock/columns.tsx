// types
import { Column, ColumnDef, SortDirection } from "@tanstack/react-table"
// components
import { Button } from "@/components/ui/button"
// icons
import { LuArrowDown01, LuArrowDown10, LuArrowDownUp } from "react-icons/lu"
// types
import { ProductStock } from "@/types/product-stock"

const getSortingArrowIcon = (isSorted: false | SortDirection) => {
	return isSorted ? isSorted == "asc" ? <LuArrowDown01 /> : <LuArrowDown10 /> : <LuArrowDownUp />
}

const sortHandler = (isSorted: false | SortDirection, column: Column<ProductStock, unknown>) => {
	if (!isSorted) column.toggleSorting(false)
	else if (isSorted == "asc") column.toggleSorting(true)
	else column.clearSorting()
}

const SortButton = ({
	column,
	children
}: {
	column: Column<ProductStock, unknown>
	children: React.ReactNode
}) => {
	return (
		<Button
			variant={"ghost"}
			onClick={() => sortHandler(column.getIsSorted(), column)}
			className="px-2 text-center hover:text-primary hover:bg-primary/10"
		>
			{children}
			{getSortingArrowIcon(column.getIsSorted())}
		</Button>
	)
}

export const columns: ColumnDef<ProductStock>[] = [
	{
		accessorKey: "storageId",
		header: ({ column }) => (
			<div className="pl-4">
				倉庫編號
			</div>
		),
		cell: ({ row }) => <div className="pl-1">{row.getValue("storageId")}</div>
	},
	{
		accessorKey: "storageName",
		header: ({ column }) => <div className="whitespace-nowrap">倉庫名稱</div>,
		cell: ({ row }) => <div className="lowercase">{row.getValue("storageName")}</div>
	},
	{
		accessorKey: "averageShipping",
		header: ({ column }) => (
			<div className="w-max m-auto">
				<SortButton column={column}>
					<span>平均出貨量</span>
				</SortButton>
			</div>
		),
		cell: ({ row }) => (
			<div className="lowercase text-center">{row.getValue("averageShipping")}</div>
		)
	},
	{
		accessorKey: "periodCount",
		header: ({ column }) => (
			<div className="w-max m-auto">
				<SortButton column={column}>
					<span className="pr-2">累積期數</span>
				</SortButton>
			</div>
		),
		cell: ({ row }) => (
			<div className="w-max m-auto lowercase text-center">{row.getValue("periodCount")}</div>
		)
	},
	{
		accessorKey: "amount",
		header: ({ column }) => (
			<div className="w-max m-auto">
				<SortButton column={column}>
					<span className="pr-2">庫存數量</span>
				</SortButton>
			</div>
		),
		cell: ({ row }) => <div className="lowercase text-center">{row.getValue("amount")}</div>
	}
]
