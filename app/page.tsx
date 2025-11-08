import Image from "next/image";
import * as userApi from "../lib/api/user"
import { User } from "../lib/types/user"
import Homepage from "./components/Homepage"
import { useAuth } from './hooks/useAuth'

export default async function Home() {
  const users: User[] = await userApi.getUsers()

  return (
    <div className="px-8 py-8">
      <Homepage users={users} />
    </div>
  );
}
