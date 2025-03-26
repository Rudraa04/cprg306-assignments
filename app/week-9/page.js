"use client";

import Link from 'next/link';


import { useUserAuth } from "./_utils/auth-context";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  console.log(user);
  return (
    <div>
      <h1>week 9</h1>
      <p>
        {user ? (
          <button onClick={firebaseSignOut}>Sign Out</button>
        ) : (
          <button onClick={gitHubSignIn}>Sign In</button>
        )}
      </p>

      {user && (<p> Welcome to my website {user.displayName}! Your email address is {user.email} 
        <Link href="/week-9/shopping-list">Explore the Landing page.</Link>. </p> )}
    </div>
  );
}