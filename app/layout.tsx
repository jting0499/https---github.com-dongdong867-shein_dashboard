import type { Metadata } from "next"
// font
import { Outfit } from "next/font/google"
// css
import "./globals.css"
// components
import Navbar from "@/components/navbar"
import { Separator } from "@/components/ui/separator"

const outfit = Outfit({ subsets: ["latin"], variable: "--font-Outfit", display: "swap" })

export const metadata: Metadata = {
	title: "shein dashboard",
	description: "Digital transformation plan of Shein."
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className={`${outfit.variable}`}>
			<body className="w-screen h-full overflow-x-hidden">
				<div className="flex w-full h-full p-4 space-x-4 max-sm:hidden">
					<div className="relative w-[15%] max-w-[200px] grow">
						<div className="sticky top-4 w-full h-[calc(100vh-32px)] bg-neutral-500/90 rounded-[32px]">
							<Navbar />
						</div>
					</div>
					<div className="w-[80%] grow">{children}</div>
				</div>
				<div className="h-screen flex flex-col justify-center place-items-center space-y-4 sm:hidden">
					<div className="flex place-items-center space-x-4">
						<div className="text-2xl font-medium tracking-wide">418</div>
						<Separator orientation="vertical" className="h-10 bg-neutral-500" />
						<div className="tracking-wide">I'm a teapot.</div>
					</div>
					<div className="text-xs">Please use a tablet or laptop to view this page.</div>
				</div>
			</body>
		</html>
	)
}
