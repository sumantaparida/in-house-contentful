import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';

const ContentModelDialog = () => {
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();

  const [name, setName] = useState('');
  const [apiIdentifier, setApiIdentifier] = useState('');
  const [description, setDescription] = useState('');

  const handleClickOutside = (event: MouseEvent) => {
    if (dialogRef.current && !dialogRef.current.contains(event.target as Node)) {
      router.push('/contentModel');
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
    if (name === apiIdentifier) setApiIdentifier(event.target.value);
  };

  const handleApiIdentifierChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setApiIdentifier(event.target.value);
  };

  const handleDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(event.target.value);
    setDescription(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic here
  };
  const isSubmitDisabled = !name || !apiIdentifier;

  return (
    <div ref={dialogRef} className="inset-0 flex items-center justify-center">
      <div className="w-[700px] rounded-lg bg-white p-6">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-semibold">Create new content type</h3>
          <Link href="/contentModel" className="text-gray-500" type="button">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </Link>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="m-0 mb-2 p-0 font-sans text-sm font-medium leading-5">
              Name <span className="text-gray-500">(required)</span>
              <input
                type="text"
                value={name}
                onChange={handleNameChange}
                maxLength={50}
                className="w-full rounded-md border border-gray-300 px-3 py-2"
                required
              />
              0/50
            </label>
          </div>
          <div className="mb-4">
            <label htmlFor="apiIdentifier" className="m-0 mb-2 p-0 font-sans text-sm font-medium leading-5">
              Api Identifier <span className="text-gray-500">(required)</span>
              <input
                type="text"
                value={apiIdentifier}
                onChange={handleApiIdentifierChange}
                maxLength={64}
                className="w-full rounded-md border border-gray-300 px-3 py-2"
                required
              />
              0/64
            </label>
          </div>
          <div className="mb-4">
            <label htmlFor="desc" className="m-0 mb-2 p-0 font-sans text-sm font-medium leading-5">
              Description
              <textarea
                value={description}
                onChange={handleDescriptionChange}
                maxLength={500}
                className="w-full resize-none rounded-md border border-gray-300 px-3 py-2"
              />
              0/500
            </label>
          </div>

          <div className="flex justify-end">
            <Link href="/contentModel" type="button" className="mr-2 h-[32px] border-2 px-4 text-base font-medium">
              Cancel
            </Link>
            <button
              type="submit"
              className={`${
                isSubmitDisabled ? 'h-[32px] cursor-not-allowed bg-gray-400 ' : 'bg-green-800 hover:bg-green-900'
              } rounded-md px-4 text-base font-medium text-white`}
              disabled={isSubmitDisabled}
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContentModelDialog;
