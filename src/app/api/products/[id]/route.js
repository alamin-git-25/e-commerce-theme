import { products } from "@/lib/data/productData";
import { NextResponse } from "next/server";


export async function GET(req, { params }) {
    const { id } = await params;
    const productId = parseInt(id);

    const product = products.find((p) => p.product_id === productId);

    if (!product) {
        return Response.json({ error: "Product not found" }, { status: 404 });
    }

    return Response.json(product);
}
