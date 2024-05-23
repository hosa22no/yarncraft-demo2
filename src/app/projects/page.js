import fetch from 'node-fetch';

// Server-side funktion för att hämta data från Ravelry API
async function fetchRavelryProjects() {
  const ravelryUsername = 'cebff1b5399c2b796ec0c36ec53fd901';
  const ravelryPassword = '64LZL63rkFNkwKfTOnF9Mkkm2Dp3Chn7UBxqASPb';

  if (!ravelryUsername || !ravelryPassword) {
    console.error('Missing Ravelry API credentials');
    return [];
  }

  const auth = 'Basic ' + Buffer.from(ravelryUsername + ':' + ravelryPassword).toString('base64');

  try {
    const response = await fetch(`https://api.ravelry.com/projects/sajuna/list.json`, {
      headers: {
        'Authorization': auth,
      },
    });
    console.log('Response Headers:', response.headers);
    if (!response.ok) {
      console.error('Failed to fetch data from Ravelry API', response.statusText);
      return [];
    }

    const data = await response.json();
  
    return data;
  } catch (error) {
    console.error('Error fetching data from Ravelry API', error);
    return [];
  }
}

// Server Component för att rendera projekten
export default async function ProjectsPage() {
  const fullJson = await fetchRavelryProjects();
const projects = fullJson.projects;
  return (
    <div className="mt-16 min-h-screen flex items-start justify-center bg-gray-100 dark:bg-custom-blue dark:text-white">

  <div className="grid grid-cols-2 gap-4 w-full max-w-6xl">
    {projects.map((project) => (
      <div key={project.name} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold">{project.name}</h2>
        
      </div>
    ))}
  </div>
</div>
  );
}


/*
import React from 'react';
/* This page is supposed to fetch the users project from the Ravelry API but it is not working. So thats why i have fetched some data from a fake API to pass the assignment
and be able to get more time to resolve the problem. *//*

// Function to fetch users
async function fetchUsers() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
      throw new Error('Failed to fetch users');
    }
    return await response.json();
  } catch (error) {
    console.error("Failed to fetch users", error);
    return [];
  }
}

const ProjectsPage = async () => {
  const users = await fetchUsers();

  return (
  
   
   <div className=" mt-16 min-h-screen flex items-start justify-center bg-gray-100 dark:bg-custom-blue dark:text-white">
      <div className="container mx-auto p-4 dark:bg-custom-blue dark:text-gray-100">
      <h1 className="text-6xl font-semibold text-center">Users</h1>
        <ul className="text-center text-lg mt-4">
          {users.map(user => (
            <li key={user.id}>
              {user.name} - {user.email} - {user.username}
            </li>
          ))}
        </ul>
      </div>
      </div>
  );
}

export default ProjectsPage;*/
