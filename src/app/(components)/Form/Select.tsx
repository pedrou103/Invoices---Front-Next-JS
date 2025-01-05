import { SelectProps } from "@/app/lib/definitions";
import { IconChevronDown } from "@tabler/icons-react";

  export default function Select({ id, name, label, options, autoComplete, size, onChange}: SelectProps) {
    return (
      <div className={size}>
        <label
          htmlFor={id}
          className="block text-sm font-medium text-gray-900"
        >
          {label}
        </label>
        <div className="mt-2 grid grid-cols-1 relative">
          <select
            id={id}
            name={name}
            autoComplete={autoComplete}
            className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
            onChange={onChange ? onChange : undefined}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <IconChevronDown className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4" />
        </div>
      </div>
    );
  }
  