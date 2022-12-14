
import { useState } from 'react';
import { useRouter } from 'next/router';

export interface ISearch {
 
}

const Search: React.FC<ISearch> = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState<string>('');
  return (
    <form className='flex flex-col items-center gap-y-5'
    onSubmit={(e) => {
      e.preventDefault();
      router.push(`/results?search=${searchTerm}`);
    }}>
      <input type='text' className='rounded-full border-2 w-5/6 sm:w-96 h-12 px-3'
      value={searchTerm}
      onChange={(e) =>setSearchTerm(e.target.value)}/>
      <div className='space-x-3'>
      <button type='submit' className='border-0 p-2 px-6 bg-slate-100 rounded-md'>Google Search</button>
      <button type='submit' className='border-0 p-2 px-6 bg-slate-100 rounded-md'>I&apos;m Feeling Lucky</button>
      </div>
    </form>
  );
};

export default Search;