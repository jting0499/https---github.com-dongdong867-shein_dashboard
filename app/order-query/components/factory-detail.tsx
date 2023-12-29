// types
import { FactoryOrder } from "@/types/factory-order"
import { Factory } from "@/types/factory"
// utils
import React from "react"
// icons
import { FaPhone, FaMapMarkerAlt, FaIdCard, FaClipboardList, FaCog, FaTruck } from "react-icons/fa"

type FactoryDetailProps = {
	factory: Factory
	order: FactoryOrder[]
}

export const FactoryDetail = ({ factory, order }: FactoryDetailProps) => {
	const statusClassName = factory.status === "working" ? "bg-blue-400" : "bg-gray-400"

	const factoryOrder = () => {
		return (
			<div className="text-black">
				<ul>
					{factory.schedule.map((factoryOrder) => (
						<div key={factoryOrder.orderId} className="order-wrapper">
							<div
								style={{
									position: "relative",
									height: "1px",
									border: "1.3px solid rgba(0, 0, 0, 0.06)",
									width: "91%",
									margin: "0 auto",
									zIndex: 1,
									top: "51.5px"
								}}
							/>
							<li
								key={factoryOrder.orderId}
								style={{ marginTop: "40px", position: "relative", paddingTop: "20px" }}
							>
								{order
									.filter((o) => o.orderId === factoryOrder.orderId)
									.map((correspondingOrder) => (
										<React.Fragment key={correspondingOrder.orderId}>
											<div style={{ position: "absolute", top: "-25px", fontSize: "1.05em" }}>
												{correspondingOrder.orderId}
											</div>
											<div
												style={{
													position: "absolute",
													width: "100%",
													height: "17px",
													backgroundColor: "rgba(0, 0, 0, 0.1)",
													zIndex: 1,
													borderRadius: "10px"
												}}
											>
												<div
													style={{
														position: "absolute",
														top: "-17px",
														left: "50%",
														transform: "translateX(-50%)",
														display: "flex",
														justifyContent: "space-between",
														width: "342px"
													}}
												>
													<FaClipboardList
														style={{
															fontSize: "15px",
															color:
																correspondingOrder.status === "inline"
																	? "rgba(0, 0, 255, 0.5)"
																	: "rgba(0, 0, 0, 0.2)",
															zIndex: 3
														}}
													/>
													<FaCog
														style={{
															fontSize: "15px",
															color:
																correspondingOrder.status === "processing"
																	? "rgba(0, 0, 255, 0.5)"
																	: "rgba(0, 0, 0, 0.2)",
															zIndex: 3
														}}
													/>
													<FaTruck
														style={{
															fontSize: "15px",
															color:
																correspondingOrder.status === "shipping"
																	? "rgba(0, 0, 255, 0.5)"
																	: "rgba(0, 0, 0, 0.2)",
															zIndex: 3
														}}
													/>
												</div>
											</div>
											<div
												style={{
													position: "absolute",
													width: `${correspondingOrder.schedulePercentage}%`,
													height: "17px",
													backgroundColor: "rgba(0, 0, 255, 0.45)",
													zIndex: 3,
													borderRadius: "10px"
												}}
											></div>
											<div
												className="text-center"
												style={{ position: "relative", bottom: "3.7px", zIndex: 3 }}
											>
												{correspondingOrder.schedulePercentage}%
											</div>
										</React.Fragment>
									))}
							</li>
						</div>
					))}
				</ul>
			</div>
		)
	}

	return (
		<div className="w-[calc(50%-10px)] h-full p-5 space-y-1 bg-white rounded-[20px]">
			<div className="flex justify-between items-center">
				<div className="font-bold" style={{ fontSize: "1.3em" }}>
					{factory.name}
				</div>
				<div
					className={`flex items-center font-bold rounded-[20px] py-0.8 px-1 ${statusClassName} text-white`}
				>
					{factory.status}
				</div>
			</div>
			<div className="flex flex-col text-gray-400">
				<div className="flex items-center">
					<FaIdCard className="mr-1" style={{ fontSize: "0.7em" }} />
					<div style={{ fontSize: "0.9em" }}>{factory.id}</div> <span className="mr-5">&nbsp;</span>
					<FaPhone className="mr-1" style={{ fontSize: "0.68em" }} />
					<div style={{ fontSize: "0.9em" }}>{factory.phone}</div>
				</div>
				<div className="flex items-center">
					<FaMapMarkerAlt className="mr-1" style={{ fontSize: "0.8em" }} />
					<div style={{ fontSize: "0.9em" }}>{factory.address}</div>
				</div>
				<hr style={{ height: "1px", border: "1.3px solid lightgrey", width: "65%" }} />
				{factory.status === "idle" && (
					<span className="text-black text-center" style={{ fontSize: "1.3em", marginTop: "20px" }}>
						目前無訂單
					</span>
				)}
				<div className="text-black">
					<ul>{factoryOrder()}</ul>
				</div>
			</div>
		</div>
	)
}
