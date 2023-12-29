// components
import Image from "next/image"
import Link from "next/link"
import { Button } from "./ui/button"
import { MdFactory } from "react-icons/md"
import { IoIosArrowForward } from "react-icons/io"
import { FaBox, FaChartArea, FaClipboardList } from "react-icons/fa"
import {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuItem
} from "./ui/dropdown-menu"

// images
import SheinLogo from "/public/shein-logo.png"

const Navbar = () => {
	return (
		<div className="w-full h-full p-2.5 flex flex-col place-items-center ">
			{/* Logo */}
			<div className="h-max flex justify-center place-items-center mx-auto pt-6 space-x-2">
				<Image src={SheinLogo} alt="" className="w-10 h-10 aspect-square" />
				<div className="text-white text-3xl xl:text-4xl font-bold max-lg:hidden">SHEIN</div>
			</div>
			<div className="h-16" />

			{/* Link to Storage Management System */}
			<div className="flex flex-col space-y-3 text-white">
				<Link href={"/storage"}>
					<Button variant={"ghost"} asChild className="h-max flex justify-between rounded-2xl">
						<div>
							<div className="flex place-items-center space-x-3 max-lg:hidden">
								<FaBox size={20} />
								<div className="text-lg xl:text-xl">庫存管理系統</div>
							</div>
							<div className="lg:hidden">
								<FaBox size={30} />
							</div>
						</div>
					</Button>
				</Link>

				{/* Link to Output Management System */}
				<Link href={"/"}>
					<Button variant={"ghost"} asChild className="h-max flex justify-between rounded-2xl">
						<div>
							<div className="w-full flex justify-between place-items-center space-x-3 max-lg:hidden">
								<FaChartArea size={20} />
								<div className="text-lg xl:text-xl">生產量管理</div>
							</div>
							<div className="lg:hidden">
								<FaChartArea size={30} />
							</div>
						</div>
					</Button>
				</Link>

				{/* Link to Order Management System */}
				<Link href={"/"}>
					<Button variant={"ghost"} asChild className="h-max flex justify-between rounded-2xl">
						<div>
							<div className="flex place-items-center space-x-3 max-lg:hidden">
								<FaClipboardList size={20} />
								<div className="text-lg xl:text-xl">訂單管理系統</div>
							</div>
							<div className="lg:hidden">
								<FaClipboardList size={30} />
							</div>
						</div>
					</Button>
				</Link>

				{/* Link to Customer Management System */}
				<Link href={"/customer"}>
					<Button variant={"ghost"} asChild className="h-max flex justify-between rounded-2xl">
						<div>
							<div className="flex place-items-center space-x-3 max-lg:hidden">
								<FaClipboardList size={20} />
								<div className="text-lg xl:text-xl">顧客管理系統</div>
							</div>
							<div className="lg:hidden">
								<FaClipboardList size={30} />
							</div>
						</div>
					</Button>
				</Link>

				{/* Link to Factor Processing System */}
				<SupplyDropdown />
			</div>
		</div>
	)
}

const SupplyDropdown = () => {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger>
				<Button variant={"ghost"} asChild className="w-full h-max flex justify-between rounded-2xl">
					<div>
						<div className="w-full flex justify-between place-items-center space-x-3 max-lg:hidden">
							<MdFactory size={20} />
							<div className="text-lg xl:text-xl">供應鏈系統</div>
						</div>
						<div className="lg:hidden">
							<MdFactory size={30} />
						</div>
					</div>
				</Button>
			</DropdownMenuTrigger>

			<DropdownMenuContent className="bg-base/50 backdrop-blur-3xl rounded-lg">
				<DropdownMenuItem>
					<Link href="/order-allocation">
						<div className="p-2 flex place-items-center text-primary hover:text-primary-foreground font-semibold text-base">
							訂單分配及管理系統
							<IoIosArrowForward />
						</div>
					</Link>
				</DropdownMenuItem>
				<DropdownMenuItem>
					<Link href="/order-query">
						<div className="p-2 flex place-items-center text-primary hover:text-primary-foreground font-semibold text-base">
							訂單查詢系統
							<IoIosArrowForward />
						</div>
					</Link>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}

export default Navbar
