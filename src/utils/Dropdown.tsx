import React, { useState } from 'react';

interface Props {
  items: string[];
  onChange?: (item: string) => void;
}

function Dropdown({ items, onChange }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState('');

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }


  function handleItemClick(item: string) {
    setSelectedItem(item);
    onChange && onChange(item);
    setIsOpen(false);
  }

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex justify-center items-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          id="options-menu"
          aria-haspopup="true"
          aria-expanded="true"
          onClick={toggleDropdown}
        >
          {selectedItem || 'Select an option'}
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M6.293 6.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 011.414 0l.707.707a1 1 0 010 1.414L11.414 10l2.293 2.293a1 1 0 010 1.414l-.707.707a1 1 0 01-1.414 0L10 11.414l-2.293 2.293a1 1 0 01-1.414 0l-.707-.707a1 1 0 010-1.414L8.586 10 6.293 7.707a1 1 0 010-1.414l.707-.707z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute right-1/2 translate-x-1/2 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {items.map((item) => (
              <button
                key={item}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
                role="menuitem"
                onClick={() => handleItemClick(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
