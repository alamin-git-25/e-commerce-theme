import { baseApi } from "./baseApi";

const productApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: ({ page = 1, limit = 10 }) => ({
                url: `/products?page=${page}&limit=${limit}`,
            }),
            providesTags: ['products']
        }),
        getProduct: builder.query({
            query: (id) => ({
                url: `/products/${id}`
            }),
            providesTags: ['products']
        }),
        getEveryProducts: builder.query({
            query: () => ({
                url: '/products/allProducts'
            }),
            providesTags: ['products']
        }),
    }),
});

export const {
    useGetAllProductsQuery,
    useGetProductQuery,
    useGetEveryProductsQuery
} = productApi;
