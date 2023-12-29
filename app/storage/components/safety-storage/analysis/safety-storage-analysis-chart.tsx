"use client"

import { ResponsiveLine, Serie } from "@nivo/line"

export const SafetyStorageAnalysisChart = ({ data }: { data: Serie[] }) => {
	return (
		<ResponsiveLine
			data={data}
			colors={{ scheme: "category10" }}
			margin={{ top: 40, right: 110, bottom: 50, left: 60 }}
			useMesh={true}
			motionConfig={"gentle"}
      pointSize={8}
			legends={[
				{
					anchor: "bottom-right",
					direction: "column",
					justify: false,
					translateX: 100,
					translateY: 0,
					itemsSpacing: 0,
					itemDirection: "left-to-right",
					itemWidth: 80,
					itemHeight: 20,
					itemOpacity: 0.75,
					symbolSize: 12,
					symbolShape: "circle",
				}
			]}
		/>
	)
}
