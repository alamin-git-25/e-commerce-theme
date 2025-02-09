import { ChevronLeft, ChevronRight } from "lucide-react";

const Pagination = ({ page, setPage, totalPages, per_page }) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPages / per_page); i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="flex items-center justify-center mt-6 space-x-2">
            {/* Previous Button */}
            <button
                onClick={() => page !== 1 && setPage(page - 1)}
                disabled={page === 1}
                className={`px-3 py-1 border rounded ${page === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-200'}`}
            >
                <ChevronLeft />
            </button>

            {
                pageNumbers?.map(page => (
                    <button
                        key={page}
                        onClick={() => setPage(page)}
                        className={`px-3 py-1 border rounded ${page === page ? 'bg-blue-500 text-white' : 'hover:bg-gray-200'}`}
                    >
                        {page}
                    </button>
                ))
            }

            {/* Next Button */}
            <button
                onClick={() => page !== pageNumbers.length && setPage(page + 1)}
                disabled={page === totalPages}
                className={`px-3 py-1 border rounded ${page === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-200'}`}
            >
                <ChevronRight />
            </button>
        </div >
    );
};

export default Pagination;


