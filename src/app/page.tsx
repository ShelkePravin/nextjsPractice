import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen p-8 pb-5 gap-5 sm:p-20 font-(family-name:--font-geist-sans)">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Welcome to Contact Manager</h1>
        <p className="mt-2 text-lg text-gray-600">
          Manage your contacts efficiently and effortlessly with our intuitive contact manager.
        </p>
      </div>
       <Image src="/contact.webp" alt="Contact Manager" width={300} height={200} className="mx-auto mt-6 rounded-lg shadow-md" />
      <div className="text-center">
        <p className="mt-2 text-lg text-gray-600">
          Start Manging your contacts now by logging in or registering an account!
        </p>
      </div>
    </div>
  );
}