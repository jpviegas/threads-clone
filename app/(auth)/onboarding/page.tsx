import AccountProfile from '@/app/components/forms/AccountProfile';
import { currentUser } from '@clerk/nextjs';

interface IUserInfo {
  _id?: string;
  objectId?: string;
  username?: string | null;
  name?: string;
  bio?: string;
  image?: string;
}

interface IUserData {
  id: string;
  objectId: string;
  username: string;
  name: string;
  bio: string;
  image: string;
}

async function Page() {
  const user = await currentUser();
  const userInfo = {} as IUserInfo;
  const userData = {
    id: user?.id,
    objectId: userInfo?._id,
    username: userInfo?.username || user?.username,
    name: userInfo?.name || user?.firstName || '',
    bio: userInfo?.bio || '',
    image: userInfo?.image || user?.imageUrl,
  } as IUserData;

  return (
    <main className="max-auto flex max-w-3xl flex-col justify-start px-10 py-20">
      <h1 className="head-text">onboarding</h1>
      <p className="mt-3 text-base-regular text-light-2">
        Complete your profile now to use Threads clone
      </p>
      <section className="mt-9 bg-dark-2 p-10">
        <AccountProfile user={userData} btnTitle="Continue" />
      </section>
    </main>
  );
}

export default Page;
