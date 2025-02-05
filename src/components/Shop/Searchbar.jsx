import { Search } from "lucide-react";
import { Input } from "../ui/input";

export default function SearchBar() {
    return (
        <div className=" relative rounded w-full">
            <Input
                type="search"
                placeholder="Search..."
                className=" w-full h-12 pl-10 text-gray-700 "
            />
            <Search className="absolute top-3 left-2" />
        </div>
    );
};

