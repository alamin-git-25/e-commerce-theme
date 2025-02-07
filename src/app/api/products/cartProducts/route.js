import { products } from "@/lib/data/productData"

export const GET = async () => {
    try {
        const product = await products;
        return Response.json(product)
    } catch (error) {
        console.log(error);

    }
}