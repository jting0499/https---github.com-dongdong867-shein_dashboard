"use client"

import { AgeClusterResult } from "./age_cluster_result";
import { LocationClusterResult } from "./location_cluster_result";
import RFM from "./rfm";

export const CustomerCluster = () => {
	return (
		<div className="w-full h-max flex flex-col justify-start place-items-start rounded-[32px] bg-base/90 overflow-hidden">
			<div className="w-full flex justify-between place-items-center px-7 pt-7">
				<div className="w-full h-max -space-y-1 font-bold mb-4">
					<div className="text-2xl">顧客分群分析</div>
					<div className="text-sm">資料時間: {" "} 3204/2/30 25:61</div>
				</div>
			</div>
			<div className="w-full p-7">
				<div className="w-full h-full p-7 bg-white rounded-[32px]">
					<div className="w-full h-max flex justify-center font-bold text-2xl">
						RFM分群分析
					</div>

					<div className="w-full p-7" style={{height: "500px"}}>
						<RFM />
					</div>
				</div>
			</div>
			<div style={{ height: "10px" }}></div>

			<div className="w-full p-7">
				<div className="h-full py-7 bg-white rounded-[32px]">
					<div className="h-max flex justify-center font-bold text-2xl">
						年齡分群分析
					</div>
					<div style={{ height: "15px" }}></div>
					<AgeClusterResult />
				</div>
			</div>
			<div style={{ height: "10px" }}></div>

			<div className="w-full p-7">
				<div className="h-full py-7 bg-white rounded-[32px]">
					<div className="h-max flex justify-center font-bold text-2xl">
						區域分群分析
					</div>
					<div style={{ height: "15px" }}></div>
					<LocationClusterResult />
				</div>
			</div>

			{/* <div className="w-full h-max flex justify-center font-bold text-xl">
				年齡分群分析
			</div>
			<div style={{ height: "15px" }}></div>
			<AgeClusterResult />
			<div style={{ height: "15px" }}></div>

			<div className="w-full h-max flex justify-center font-bold text-xl">
				區域分群分析
			</div>
			<div style={{ height: "15px" }}></div>
			<LocationClusterResult /> */}
		</div>
	)
}