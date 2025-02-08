import { products } from "@/lib/data/productData";

export async function GET(req) {
    try {
        const { searchParams } = new URL(req.url);
        const page = parseInt(searchParams.get("page")) || 1;
        const limit = parseInt(searchParams.get("limit")) || 12;

        if (page < 1 || limit < 1) {
            return new Response(
                JSON.stringify({ error: "Invalid page or limit value" }),
                { status: 400 }
            );
        }

        const startIndex = (page - 1) * limit;
        const endIndex = startIndex + limit;

        const paginatedProducts = products.slice(startIndex, endIndex);

        const totalPages = Math.ceil(products.length / limit);

        return new Response(
            JSON.stringify({
                data: paginatedProducts,
                currentPage: page,
                totalPages: totalPages,
                totalProducts: products.length
            }),
            { status: 200 }
        );
    } catch (error) {
        return new Response(
            JSON.stringify({ error: "Server Error" }),
            { status: 500 }
        );
    }
}


