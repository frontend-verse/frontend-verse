import {
    Pagination as UIPagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

export function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
    const getPageNumbers = () => {
        const pages = [];
        const maxVisiblePages = 5;

        if (totalPages <= maxVisiblePages) {
            // Show all pages if total pages are less than or equal to maxVisiblePages
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            // Always show first page
            pages.push(1);

            // Calculate start and end of visible pages
            let start = Math.max(2, currentPage - 1);
            let end = Math.min(totalPages - 1, currentPage + 1);

            // Adjust if we're near the start
            if (currentPage <= 3) {
                end = 4;
            }

            // Adjust if we're near the end
            if (currentPage >= totalPages - 2) {
                start = totalPages - 3;
            }

            // Add ellipsis after first page if needed
            if (start > 2) {
                pages.push('...');
            }

            // Add middle pages
            for (let i = start; i <= end; i++) {
                pages.push(i);
            }

            // Add ellipsis before last page if needed
            if (end < totalPages - 1) {
                pages.push('...');
            }

            // Always show last page
            pages.push(totalPages);
        }

        return pages;
    };

    return (
        <UIPagination>
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious
                        className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                        onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
                    />
                </PaginationItem>

                {getPageNumbers().map((page, idx) => (
                    <PaginationItem key={idx}>
                        {page === '...' ? (
                            <PaginationEllipsis />
                        ) : (
                            <PaginationLink
                                isActive={currentPage === page}
                                onClick={() => onPageChange(page as number)}
                            >
                                {page}
                            </PaginationLink>
                        )}
                    </PaginationItem>
                ))}

                <PaginationItem>
                    <PaginationNext
                        className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
                        onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
                    />
                </PaginationItem>
            </PaginationContent>
        </UIPagination>
    );
} 