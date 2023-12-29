"use client"

// components
import { Input } from "@/components/ui/input"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table"
import {
    ColumnFiltersState,
    SortingState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable
} from "@tanstack/react-table"
import { SetStateAction, useState } from "react"
// util
import { Button } from "@/components/ui/button"
import { columns } from "./columns"

// TODO: REPLACE FAKE DATA
const product: ProductInCustomerOrder[] = [
    {
        productId: "p1",
        price: 300,
        amount: 2,
    },
    {
        productId: "p2",
        price: 600,
        amount: 1,
    },
    {
        productId: "p3",
        price: 550,
        amount: 1,
    },
]
const data: CustomerOrder[] = [
	{
		orderId: "t1",
		customerId: "c2",
		createdAt: "2023/04/08 04:08",
		price: 520,
		// products: [product[0],product[2]],
        products: [],
	},
	{
		orderId: "t2",
		customerId: "c1",
		createdAt: "2023/04/08 08:08",
		price: 520,
		// products: [product[0]],
        products: [],
	},
	{
		orderId: "t3",
		customerId: "c450",
		createdAt: "2023/04/08 14:08",
		price: 520,
		// products: product,
        products: [],
	}
]

export const CustomerOrderTable = () => {
	const [sorting, setSorting] = useState<SortingState>([])
	const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
    const [filterField, setFilterField] = useState("orderId")

    const handleFilterFieldChange = (event: { target: { value: SetStateAction<string> } }) => {
        setFilterField(event.target.value);
    };

	const table = useReactTable({
		data,
		columns,
		onSortingChange: setSorting,
		onColumnFiltersChange: setColumnFilters,
		getCoreRowModel: getCoreRowModel(),
		getSortedRowModel: getSortedRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		state: {
			sorting,
			columnFilters
		}
	})

	const PaginationButton = () => {
		return (
			<div className="flex justify-end space-x-2">
				<Button
					variant={"outline"}
					onClick={() => table.previousPage()}
					disabled={!table.getCanPreviousPage()}
					className="hover:bg-primary-foreground hover:text-primary"
				>
					Previous
				</Button>
				<Button onClick={() => {console.log("clickkkkk"); table.nextPage();}} disabled={!table.getCanNextPage()}>
					Next
				</Button>
			</div>
		)
	}

	return (
		<div className="w-full h-full p-7 space-y-4 bg-white rounded-[32px]">
            <div className="flex justify-end place-items-center">
				{/* <div className="pl-1 font-bold">商品名稱: </div> */}
                <select
                    value={filterField}
                    onChange={handleFilterFieldChange}
                    className="p-2 border rounded"
                    // className="p-2 rounded-2xl border"
                >
                    <option value="orderId">訂單編號</option>
                    <option value="customerId">顧客編號</option>
                    <option value="createdAt">下單時間</option>
                    <option value="product">購買產品</option>
                </select>
                <div style={{ width: "15px" }}></div>
                <Input
                    placeholder={`search ${filterField}...`}
                    value={(table.getColumn(filterField)?.getFilterValue() as string) ?? ""}
                    onChange={(event) => table.getColumn(filterField)?.setFilterValue(event.target.value)}
                    className="w-1/3"
                />
			</div>
			<div className="rounded-2xl border">
				<Table>
					<TableHeader>
						{table.getHeaderGroups().map((headerGroup) => (
							<TableRow key={headerGroup.id}>
								{headerGroup.headers.map((header) => {
									return (
										<TableHead key={header.id}>
											{header.isPlaceholder
												? null
												: flexRender(header.column.columnDef.header, header.getContext())}
										</TableHead>
									)
								})}
							</TableRow>
						))}
					</TableHeader>
					<TableBody>
						{table.getRowModel().rows.length ? (
							table.getRowModel().rows.map((row) => (
								<TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
									{row.getVisibleCells().map((cell) => (
										<TableCell key={cell.id}>
											{flexRender(cell.column.columnDef.cell, cell.getContext())}
										</TableCell>
									))}
								</TableRow>
							))
						) : (
							<TableRow>
								<TableCell colSpan={columns.length} className="h-24 text-center">
									No Results.
								</TableCell>
							</TableRow>
						)}
					</TableBody>
				</Table>
			</div>
			<PaginationButton />
		</div>
	)
}
