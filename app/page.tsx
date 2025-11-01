import Image from "next/image";
import * as userApi from "../lib/api/user"
import { User } from "../lib/types/user"
import Leaderboard from "./components/Leaderboard"

export default async function Home() {
  const users: User[] = await userApi.getUsers()
  console.log('Log in component' + users)

  return (
    <div className="px-8 py-8">
      <h1 className="text-3xl font-bold mb-8">LEADERBOARD</h1>
      <Leaderboard users={users}/> {/* component interface must be defined with props that are being passed down into the component*/}
    </div>
  );
}
