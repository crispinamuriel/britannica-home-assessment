import { Profile } from "../types/Profile";
import { notFound } from 'next/navigation';
import Link from 'next/link';


interface DynamicRouteProps {
  params: { id: number }
}

export default async function ProfileShowPage(props: DynamicRouteProps) {
  const id = props.params.id;

  // Server action
  async function addLike() {
    'use server';
    try {
      const response = await fetch(`http://localhost:3000/api/likeProfile/${id}`, {
        method: 'POST'
      });

      if (response.ok) {
        console.log(`Added like to user with id: ${id}.`);
        const data = await response.json();
        console.log(data)
      } else {
        console.error('Failed to like profile:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };


  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const profile: Profile = await response.json();

  if (!response.ok) {
    return notFound();
  }

  return (
    <div className="flex flex-col max-w-sm w-full lg:flex m-10 max-w-lg min-w-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-70 hover:bg-slate-950 lg:flex-row">
      <div className="flex row">
        <div>
          <img className="w-80" src={`https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png`} alt="Profile Picture" />
        </div>
      </div>
      <div className="pl-8">
        <div className="uppercase text-3xl tracking-wide text-sm text-indigo-500 font-semibold">{profile.name}</div>
        <form action={addLike}>
          <button className="flex bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
            </svg>
          </button>
        </form>
        <a href={profile.email}>
          <p className="mt-2 text-gray-300 hover:text-sky-400">{profile.email}</p>
        </a>
        <p className="mt-2 text-gray-300">{profile.phone}</p>
        <Link href={`https://${profile.website}`}><p className="mt-2 text-blue-500 hover:text-sky-400">{profile.website}</p></Link>
        <div className="mt-4">
          <p className="text-gray-300">{profile.address.street}, {profile.address.suite}</p>
          <p className="text-gray-300">{profile.address.city}, {profile.address.zipcode}</p>
        </div>
        <div className="mt-4">
          <p className="text-gray-300">Company: {profile.company.name}</p>
          <p className="text-gray-300">Catch Phrase: {profile.company.catchPhrase}</p>
          <p className="text-gray-300">BS: {profile.company.bs}</p>
        </div>
      </div>
    </div>
  )
}