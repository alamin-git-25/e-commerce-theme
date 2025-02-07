
import { ChevronLeft, ChevronRight } from "lucide-react";

const Pagination = ({ page, setPage, totalPages }) => {
    return (
        <div className="flex items-center space-x-2">
            {/* Previous Button */}
            <button
                onClick={() => setPage(page - 1)}
                disabled={page === 1}
                className={`px-3 py-1 border rounded ${page === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-200'}`}
            >
                <ChevronLeft />
            </button>

            {/* Page Numbers */}
            {Array.from({ length: totalPages }, (_, index) => {
                const pageNumber = index + 1;
                return (
                    <button
                        key={pageNumber}
                        onClick={() => setPage(pageNumber)}
                        className={`px-3 py-1 border rounded ${page === pageNumber ? 'bg-blue-500 text-white' : 'hover:bg-gray-200'
                            }`}
                    >
                        {pageNumber}
                    </button>
                );
            })}

            {/* Next Button */}
            <button
                onClick={() => setPage(page + 1)}
                disabled={page === totalPages}
                className={`px-3 py-1 border rounded ${page === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-200'}`}
            >
                <ChevronRight />
            </button>
        </div>
    );
};

export default Pagination;
