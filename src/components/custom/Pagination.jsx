import { ChevronLeft, ChevronRight } from "lucide-react";

const Pagination = ({ page, setPage, totalPages, per_page }) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPages / per_page); i++) {
        pageNumbers.push(i);
    }
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    const prev = () => {
        page !== 1 && setPage(page - 1);
        scrollToTop()
    }
    const num = (num) => {
        setPage(num);
        scrollToTop()
    }
    const next = () => {
        page !== pageNumbers.length && setPage(page + 1)
        scrollToTop()
    }
    return (
        <div className="flex items-center justify-center mt-6 space-x-2">
            {/* Previous Button */}
            <button
                onClick={prev}
                disabled={page === 1}
                className={`px-3 py-1 border rounded ${page === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-200'}`}
            >
                <ChevronLeft />
            </button>

            {
                pageNumbers?.map(pageNum => (
                    <button
                        key={pageNum}
                        onClick={() => num(pageNum)}
                        className={`px-3 py-1 border rounded ${pageNum == page ? 'bg-button text-white' : ''}`}
                    >
                        {pageNum}
                    </button>
                ))
            }

            {/* Next Button */}
            <button
                onClick={next}
                disabled={page === totalPages}
                className={`px-3 py-1 border rounded ${page === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-200'}`}
            >
                <ChevronRight />
            </button>
        </div >
    );
};

export default Pagination;


