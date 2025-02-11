import { Search } from "lucide-react";
import { Input } from "../../ui/input";

export default function SearchBar({ searchTerm, setSearchTerm }) {
    return (
        <div className=" relative rounded w-full">
            <Input
                type="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search..."
                className=" w-full h-12 pl-10 text-gray-700 "
            />
            <Search className="absolute top-3 left-2" />
        </div>
    );
};

