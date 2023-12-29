"use client"

import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue
} from "@/components/ui/select"

export const SafetyStorageFilter = ({
	setFilter
}: {
	setFilter: React.Dispatch<React.SetStateAction<string>>
}) => {
	return (
		<div className="w-1/3 flex flex-col justify-end place-items-start space-x-2">
			<div className="text-sm pl-2">Select status to display.</div>
			<Select defaultValue="all" onValueChange={(value) => setFilter(value)}>
				<SelectTrigger>
					<SelectValue placeholder={"Select status to display."} />
				</SelectTrigger>
				<SelectContent className="bg-background">
					<SelectItem value="all">All.</SelectItem>
					<SelectItem value="good">Good.</SelectItem>
					<SelectItem value="warning">Warning.</SelectItem>
					<SelectItem value="bad">Bad.</SelectItem>
				</SelectContent>
			</Select>
		</div>
	)
}
