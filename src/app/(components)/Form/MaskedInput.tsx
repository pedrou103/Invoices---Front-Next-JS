import InputMask from 'react-input-mask';

interface MaskedInputProps {
  type: string;
  name: string;
  id: string;
  title: string;
  placeholder: string;
  mask: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function MaskedInput({ type, name, id, title, placeholder, mask, value, onChange }: MaskedInputProps) {
  return (
    <div className="col-span-full">
      <label htmlFor={id} className="block text-sm font-medium text-gray-900">
        {title}
      </label>
      <div className="mt-2">
        <InputMask
          mask={mask}
          value={value}
          onChange={onChange}
        >
          {(inputProps) => (
            <input
              {...inputProps}
              type={type}
              name={name}
              id={id}
              placeholder={placeholder}
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
            />
          )}
        </InputMask>
      </div>
    </div>
  );
}
