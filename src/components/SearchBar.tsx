'use client';
import React, { useState } from 'react';

interface SearchBarProps {
  onSearch?: (query: string) => void;
  placeholder?: string;
  className?: string;
}

function SearchBar({
  onSearch,
  placeholder = 'Search Pokemon...',
  className = '',
}: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    onSearch?.(value);
  };

  const handleClear = () => {
    setQuery('');
    onSearch?.('');
  };

  return (
    <div className={`mx-auto w-full max-w-xl ${className}`}>
      <div
        className={`relative flex items-center rounded-xl bg-white shadow-md transition-all ${
          isFocused ? 'ring-2 ring-blue-400' : ''
        }`}
      >
        <div className='absolute left-3'>
          <svg
            className={`h-5 w-5 ${
              isFocused ? 'text-blue-500' : 'text-gray-400'
            }`}
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
            />
          </svg>
        </div>

        <input
          type='text'
          value={query}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          className='w-full rounded-xl bg-transparent py-3 pl-10 pr-10 text-gray-800 placeholder-gray-400 outline-none'
        />

        {query && (
          <button
            onClick={handleClear}
            className='absolute right-3 text-gray-400 hover:text-gray-600'
          >
            <svg
              className='h-4 w-4'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}

export default SearchBar;
