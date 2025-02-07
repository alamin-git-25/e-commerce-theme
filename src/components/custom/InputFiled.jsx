export function InputField({ id, label, value, placeholder, onChange }) {
    return (
        <div>
            <label htmlFor={id} className="block text-sm font-medium ">
                {label}
            </label>
            <input
                required
                type="text"
                id={id}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                className="mt-1 p-3 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </div>
    );
}