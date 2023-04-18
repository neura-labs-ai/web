import { Metadata } from "next";
import { getServerSession } from "next-auth";

export async function generateMetadata({}: SettingsProps): Promise<Metadata> {
  const session = await getServerSession();

  return {
    title: `${session?.user?.name} Settings`,
    description: `Settings for ${session?.user?.name}`,
  };
}

interface SettingsProps {}

const page = async ({}: SettingsProps) => {
  return (
    <>
      <br />
      <h1>Account Settings</h1>
      <p>Under development...</p>
    </>
  );
};

export default page;
