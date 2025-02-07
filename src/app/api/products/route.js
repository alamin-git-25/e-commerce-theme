import { products } from "@/lib/data/productData";

export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page")) || 1;
    const limit = parseInt(searchParams.get("limit")) || 12;

    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;

    const paginatedProducts = products.slice(startIndex, endIndex);

    return Response.json({
        data: paginatedProducts,
        currentPage: page,
        totalPages: Math.ceil(products.length / limit),
        totalProducts: products?.length
    });
}

