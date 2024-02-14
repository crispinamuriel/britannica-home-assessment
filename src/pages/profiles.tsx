import { Profile } from '../app/types/Profile';
import { notFound } from 'next/navigation';
import ProfileComponent from './profile';

export default async function Profiles() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const profiles: Profile[] = await response.json();

  if (!response.ok || !profiles[0].id || !response) {
    return <h1>Not Found</h1>
  }

  return (
    <div className="flex min-h-screen flex-col items-center p-24 min-w-400">
      {profiles.map(profile => (
        <ProfileComponent key={profile.id} profile={profile} />
      ))}
    </div>
  )
};