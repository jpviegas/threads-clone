import AccountProfile from '@/app/components/forms/AccountProfile';
import { currentUser } from '@clerk/nextjs';

async function Page() {
  const user = await currentUser();
  const userInfo = {};
  const userData = {
    id: 'WILL COME FROM DATABASE...',
    objectId: userInfo?._id,
    username: userInfo?.username || user?.username,
    name: userInfo?.name || user?.firstName || '',
    bio: userInfo?.bio || '',
    image: userInfo?.image || user?.imageUrl,
  };

  return (
    <main className="max-auto flex max-w-3xl flex-col justify-start px-10 py-20">
      <h1 className="head-text">onboarding</h1>
      <p className="mt-3 text-base-regular text-light-2">
        Complete your profile now to use Threads clone
      </p>
      <section className="mt-9 bg-dark-2 p-10">
        <AccountProfile user={userData} btbTitle="Continue" />
      </section>
    </main>
  );
}

export default Page;
