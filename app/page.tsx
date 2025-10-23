import Image from "next/image";
import * as userApi from "../lib/api/user"
import { User } from "../lib/types/user"

export default async function Home() {
  const users: User[] = await userApi.getUsers()
  console.log('Log in component' + users)

  return (
    <div>
      <h1>HOMEPAGE</h1>
      <p>This just placeholder text, wthelly going on yo?</p>
      <ul>
          {users.map(user => (
            <li key={user._id}>{user.username}: {user.wins}</li>
          ))}
      </ul>
    </div>
  );
}
