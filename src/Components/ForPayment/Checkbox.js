// Checkbox.js
import React from 'react';

function Checkbox({ label, className }) {
    return (
      <div className={`flex gap-4 p-4 text-base tracking-wider text-black bg-white rounded-xl border border-black border-solid max-md:flex-wrap ${className}`}>
        <input type="checkbox" id={label} className="shrink-0 bg-white rounded-xl border border-black border-solid h-[15px] w-[15px]" />
        <label htmlFor={label} className="flex-auto">
          {label}
        </label>
      </div>
    );
  }

export default Checkbox;
