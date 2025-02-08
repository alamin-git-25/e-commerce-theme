import { products } from "@/lib/data/productData"

export const GET = async () => {
    try {
        const allProducts = products;
        return Response.json(allProducts)
    } catch (error) {
        console.log(error);
    }
}