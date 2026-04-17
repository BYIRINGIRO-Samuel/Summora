"use client";

export default function SearchInput({ placeholder }: { placeholder: string }) {
  return (
    <div className="w-full flex items-center bg-white border border-neutral-100 p-4 rounded-full shadow-2xl hover:shadow-[0_45px_100px_-20px_rgba(0,0,0,0.15)] transition-all">
      <div className="pl-10 flex items-center text-neutral-300">
         <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
         </svg>
      </div>
      <input 
        type="text" 
        placeholder={placeholder}
        className="w-full bg-transparent px-10 py-8 text-2xl font-medium text-black outline-none placeholder:text-neutral-200"
      />
    </div>
  );
}
