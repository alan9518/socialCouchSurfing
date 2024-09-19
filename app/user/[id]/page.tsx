import { ContentTabItem, ContentTabs } from '@/components/ContentTabs';
import { UserPostsList } from '@/components/Posts/UserPostsList';
import { Details } from '@/components/User/Details/';

export default async function Profile({ params }: { params: { id: string } }) {
  const { id } = params;

  const tabsData: ContentTabItem[] = [
    {
      tabTitle: 'Details',
      tabContent: <Details userId={parseInt(id)} />,
    },
    {
      tabTitle: 'Posts',
      tabContent: <UserPostsList userId={parseInt(id)} />,
    },
  ];
  return (
    <section className="pt-12 px-4 md:p-4 w-full bg-white  overflow-y-auto">
      <h2 className="text-2xl font-semibold mt-4">Profile</h2>

      <div className="flex flex-col items-center justify-center mt-4">
        <ContentTabs tabsData={tabsData} />
      </div>
    </section>
  );
}
