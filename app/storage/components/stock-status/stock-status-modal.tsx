type Props = {
	percentage: number
	name: string
}

export const StockStatusModal = ({ percentage, name }: Props) => {
	const getBackgroundColor = (percentage: number) => {
		if (percentage <= 20) return "bg-destructive"
		if (percentage <= 50) return "bg-warning"
		return "bg-good"
	}

	return (
		<div className="w-20 h-full flex flex-col justify-center place-items-center space-y-2">
			<div className="relative w-14 h-3/4 flex flex-col justify-between bg-primary-foreground rounded-3xl overflow-hidden">
				<div />
				<div
					className={`w-full flex justify-center place-items-center ${getBackgroundColor(
						percentage
					)}`}
					style={{ height: percentage + "%" }}
				/>
			</div>
			<div className="text-sm font-medium">{name}</div>
		</div>
	)
}
