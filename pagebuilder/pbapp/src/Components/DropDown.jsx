import React, { useState, useRef } from 'react';

function DropDown({ Default, title_items, width, setVal, func }) {
  const [open, setOpen] = useState(false);
  const [choice, setchoice] = useState('');
  const dropdownRef = useRef();
  // console.log(title_items.entru)
  // console.log(Object.entries(title_items).map((item, index)=>console.log(item)))
  const toggle = () => {
    setOpen(!open);
  };

  const handlechoiceSelect = (val) => {
    // console.log(val)
    setchoice(val);
    setVal(func, val);
    setOpen(false);
  };

  const handleOutsideClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  // Attach event listener when dropdown is open
  React.useEffect(() => {
    if (open) {
      document.addEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [open]);

  return (
    <div ref={dropdownRef} className="relative " style={{ width: width }} onClick={() => toggle()}>
      <button
        onClick={toggle}
        className={`flex w-full items-center justify-between rounded bg-white p-2 ring-1 ${open ? 'ring-blue-600' : 'ring-gray-300'}`}
      >
        <span className="text-[12px]">{choice === '' ? title_items[Default] : title_items[choice]}</span>
        <svg
          className={`w-2.5 h-2.5 ml-2.5 ${open ? 'transform rotate-180' : ''}`}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
        </svg>
      </button>

      {open && (
        <ul className="absolute mt-1 w-max rounded bg-gray-50 ring-1 ring-gray-300 z-20">
          {Object.entries(title_items).map((item, index) => {
            return (
              <li className="cursor-pointer select-none p-2 hover:bg-gray-200" onClick={() => handlechoiceSelect(item[0])} key={index}>
                {item[1]}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default DropDown;
