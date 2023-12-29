import { FactoryOrders } from "@/components/factory-orders"

const StorageLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="flex w-full">
			<div className="w-2/3 h-real grow">{children}</div>
			<div className="w-1/4 sticky top-4 h-[calc(100vh-32px)] ml-4 max-xl:hidden">
				<FactoryOrders />
			</div>
		</div>
	)
}

export default StorageLayout
