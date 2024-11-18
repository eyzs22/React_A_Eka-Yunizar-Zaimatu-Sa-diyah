import React, { useState } from 'react';

export default function RadioButton({ options, defaultValue, onChange }) {
  const [selected, setSelected] = useState(defaultValue || options[0]?.value);

  const handleSelectionChange = (value) => {
    setSelected(value);
    onChange(value); // Call onChange prop to update the parent component
  };

  return (
    <div className="flex gap-4">
<<<<<<< HEAD
      {options.map((option) => (
        <label
          key={option.value}
          className="flex items-center cursor-pointer gap-2 inline-flex text-[#001f3f]" // Ubah warna teks di sini
=======
      {options.map((option, index) => (
        <label
          key={option.value}
          className="flex items-center cursor-pointer gap-2 inline-flex"
>>>>>>> fcd2578 (first commit)
        >
          <input
            type="radio"
            name="customRadio"
            value={option.value}
            checked={selected === option.value}
            onChange={() => handleSelectionChange(option.value)}
            className="hidden"
          />
          <span
<<<<<<< HEAD
            className={`w-4 h-4 rounded-full flex items-center justify-center border ${selected === option.value ? 'bg-[#ffffff] border-[#001f3f]' : 'border-[#656666]'}`}
            style={{ width: '16px', height: '16px', borderWidth: '1px' }}
          >
            {selected === option.value && <span className="w-2.5 h-2.5 bg-[#001f3f] rounded-full"></span>}
          </span>
          <span className={`ml-2 text-[#001f3f]`}>{option.label}</span> {/* Ubah warna teks di sini */}
=======
            className={`w-4 h-4 rounded-full flex items-center justify-center border ${selected === option.value ? 'bg-[#c02020] border-[#c02020]' : 'border-[#656666]'}`}
            style={{ width: '16px', height: '16px', borderWidth: '1px' }}
          >
            {selected === option.value && <span className="w-2.5 h-2.5 bg-[#c02020] rounded-full"></span>}
          </span>
          <span className={`ml-2 ${selected === option.value ? 'text-[#ffffff]' : 'text-[#ffffff]'}`}>{option.label}</span>
>>>>>>> fcd2578 (first commit)
        </label>
      ))}
    </div>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> fcd2578 (first commit)
