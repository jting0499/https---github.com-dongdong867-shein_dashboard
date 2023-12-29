import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { PiQuestionFill } from "react-icons/pi"

type SafetyStorageModalProps = {
	safetyStoragePercentage: number
	productId: string
	productName: string
}

export const SafetyStorageModal = ({
	safetyStoragePercentage,
	productId,
	productName
}: SafetyStorageModalProps) => {
	return (
		<div className="w-40 min-w-[144px] h-full pt-4 flex flex-col justify-center place-items-center space-y-3">
			{safetyStoragePercentage > 1.1 ? (
				<>
					<div className="w-full h-full rounded-full bg-good" />
					<div className="w-full h-full rounded-full bg-good" />
					<div className="w-full h-full rounded-full bg-good" />
				</>
			) : safetyStoragePercentage < 0.9 ? (
				<>
					<div className="w-full h-full rounded-full bg-white" />
					<div className="w-full h-full rounded-full bg-white" />
					<div className="w-full h-full rounded-full bg-secondary" />
				</>
			) : (
				<>
					<div className="w-full h-full rounded-full bg-white" />
					<div className="w-full h-full rounded-full bg-warning" />
					<div className="w-full h-full rounded-full bg-warning" />
				</>
			)}
			<div className="font-bold text-center">
				<TooltipProvider>
					<Tooltip>
						<TooltipTrigger>
							<div className="flex justify-center place-items-center gap-x-1">
								{productName}
								<PiQuestionFill size={16} />
							</div>
						</TooltipTrigger>
						<TooltipContent className="bg-background">
							<div className="text-xs">{productId}</div>
						</TooltipContent>
					</Tooltip>
				</TooltipProvider>
			</div>
		</div>
	)
}
