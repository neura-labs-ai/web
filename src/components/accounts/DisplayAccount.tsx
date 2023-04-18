import { User } from "next-auth";
import Image from "next/image";
import { FC } from "react";

interface DisplayAccountProps {
  user: User | null;
}

const DisplayAccount: FC<DisplayAccountProps> = ({ user }) => {
  const userName = decodeURI(user?.name!);

  if (!user) return <h1>Account not found</h1>;

  return (
    <>
      <Image
        src={user.image!}
        alt={`${userName} account image`}
        width={20}
        height={20}
      />
      <h1>{userName} Account information</h1>
      <br />
      <div className="">
        <ul>
          <li>Name: {userName ?? "Unknown"}</li>
          <li>Roles: {user?.roles?.map((r) => r).join(", ") ?? "Unknown"}</li>
          {user.bio ? <li>Bio: {user.bio}</li> : <li>No Bio</li>}
        </ul>
      </div>
    </>
  );
};

export default DisplayAccount;
