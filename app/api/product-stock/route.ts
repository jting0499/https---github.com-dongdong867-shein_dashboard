import { getProductStock } from "@/actions/product-stock"
import { NextRequest } from "next/server"

export const GET = async (request: NextRequest): Promise<Response> => {
	const productId = request.nextUrl.searchParams.get("productId")
	const res = await getProductStock(productId as string)
	return new Response(JSON.stringify(res))
}
