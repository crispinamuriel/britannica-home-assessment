import { NextApiRequest, NextApiResponse } from 'next';

// Mock data to simulate profile likes
const profiles = [
  { id: 1, name: 'John Doe', likes: 0 },
  { id: 2, name: 'Jane Doe', likes: 0 },
  { id: 3, name: 'Jim Doe', likes: 0 },
  { id: 4, name: 'Josh Doe', likes: 0 },
  { id: 5, name: 'Joshua Doe', likes: 0 },
  { id: 6, name: 'Jason Doe', likes: 0 },
  { id: 7, name: 'James Doe', likes: 0 },
  { id: 8, name: 'Jake Doe', likes: 0 },
  { id: 9, name: 'Jerimiah Doe', likes: 0 },
  { id: 10, name: 'Javen Doe', likes: 0 },
];

export default function likesHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { id } = req.query; // Get the profile ID from the query parameters

    // Find the profile with the given ID
    const profile = profiles.find((p) => p.id === parseInt(id as string));

    if (!profile) {
      return res.status(404).json({ error: 'Profile not found' });
    }

    // Increment the like count for the profile
    profile.likes++;

    res.status(200).json({ likes: profile.likes });
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
