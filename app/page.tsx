// components
import Image from "next/image"
// images
import SheinLogo from "/public/shein-logo.png"

const Home = () => {
	return (
    <div className="h-full flex justify-center bg-neutral-500/90 rounded-[32px]">
      <div className="flex flex-col justify-center place-items-center opacity-60">
				<Image src={SheinLogo} alt="" />
        <div className="text-5xl text-background font-bold mt-4">SHEIN</div>
      </div>
		</div>
	)
}

export default Home
