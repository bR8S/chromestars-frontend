import Image from "next/image";
import * as userApi from "../lib/api/user"
import { User } from "../lib/types/user"
import Leaderboard from "./components/leaderboard"

export default async function Home() {
  const users: User[] = await userApi.getUsers()
  console.log('Log in component' + users)

  return (
    <div>
      <h1>LEADERBOARD</h1>
      <Leaderboard users={users}/> {/* component interface must be defined with props that are being passed down into the component*/}
    </div>
  );
}
