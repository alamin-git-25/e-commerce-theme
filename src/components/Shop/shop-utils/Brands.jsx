export default function BrandsFilter() {
    const brands = ["TechEase", "NatureFresh", "UrbanStyle", "EcoCraft", "GadgetWorld"];

    return (
        <div className="mt-5 bg-white dark:bg-gray-700  border rounded shadow-sm">
            <h2 className="text-lg font-semibold mb-3 px-4 py-2">Brands</h2>
            <ul className="space-y-2">
                {brands.map((brand, index) => (
                    <li key={index} className="flex items-center text-gray-800 dark:text-gray-200 space-x-2 px-4 py-2 border-b last:border-b-0 dark:border-gray-600 hover:bg-black">
                        <input
                            type="checkbox"
                            id={`brand-${index}`}
                            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <label htmlFor={`brand-${index}`} className="">
                            {brand}
                        </label>
                    </li>
                ))}
            </ul>
        </div>
    );
};

