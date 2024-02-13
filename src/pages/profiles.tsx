import { Profile } from './types/Profile';
import ProfileComponent from './profile';

export default async function Profiles() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const profiles: Profile[] = await response.json();

  return (
    <div className="flex min-h-screen flex-col items-center p-24">

      {profiles.map(profile => (
        <ProfileComponent key={profile.id} profile={profile} />
      ))}
    </div>
  )
};

/*<div key={profile.id} className="flex flex-col max-w-sm w-full lg:max-w-full lg:flex mb-10 max-w-lg p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-70 hover:bg-slate-950">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <img className="h-48 w-full object-cover md:w-48" src={`https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png`} alt="Profile Picture" />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{profile.name}</div>
              <p className="mt-2 text-gray-500">{profile.email}</p>
              <p className="mt-2 text-gray-500">{profile.phone}</p>
              <p className="mt-2 text-gray-500">{profile.website}</p>
              <div className="mt-4">
                <p className="text-gray-400">{profile.address.street}, {profile.address.suite}</p>
                <p className="text-gray-400">{profile.address.city}, {profile.address.zipcode}</p>
              </div>
              <div className="mt-4">
                <p className="text-gray-400">Company: {profile.company.name}</p>
                <p className="text-gray-400">Catch Phrase: {profile.company.catchPhrase}</p>
                <p className="text-gray-400">BS: {profile.company.bs}</p>
              </div>
            </div>
          </div>
        </div>*/


