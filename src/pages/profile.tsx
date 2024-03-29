'use client'
import { useState } from 'react'
import { Profile } from "../app/types/Profile";
import Link from 'next/link';


interface ProfileProps {
  profile: Profile;
}


const ProfileComponent: React.FC<ProfileProps> = ({ profile }) => {
  const [likes, setLikes] = useState(0)
  if (!profile) {
    return <h1>Not Found</h1>
  }
  return (
    <div className="flex flex-col max-w-sm w-1/2 min-w-full md:min-w-1/2 lg:max-w-full lg:flex mb-10 max-w-lg p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-70 hover:bg-slate-950">
      <Link href={`/${profile.id}`}>
        <h2 className="hover:text-sky-400 mb-1">View Full Profile</h2>
        <div>
          <img className="w-1/3" src={`https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png`} alt="Profile Picture" />
        </div>
      </Link>
      <div className="p-8">
        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold mb-3">{profile.name}</div>
        <button className={`flex bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${likes > 0 ? 'bg-blue-700' : ''}`} onClick={() => setLikes((likes) => likes > 0 ? 0 : 1)}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-1">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
          </svg> Like:{' '}
          {likes}
        </button>
        <a href={profile.email}>
          <p className="mt-2 text-gray-300 hover:text-sky-400">{profile.email}</p>
        </a>
        <p className="mt-2 text-gray-300">{profile.phone}</p>
        <Link href={`https://${profile.website}`}><p className="mt-2 text-blue-500 hover:text-sky-400">{profile.website}</p></Link>
      </div>
    </div>
  );
};

export default ProfileComponent;
