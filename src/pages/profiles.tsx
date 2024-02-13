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