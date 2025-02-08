import { baseApi } from "./baseApi";

export const categoryapi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getCategories: builder.query({
            query: () => ({
                url: '/category'
            }),
            providesTags: ['category']
        })
    })
})

export const {
    useGetCategoriesQuery
} = categoryapi;