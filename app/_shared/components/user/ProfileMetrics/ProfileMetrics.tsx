export const ProfileMetrics = () => {
  return (
    <section className="w-full flex items-center justify-center gap-2">
      <ProfileMetric label="40" metric="Posts" showBorder={true} />
      <ProfileMetric label="2.8k" metric="Followers" showBorder={true} />
      <ProfileMetric label="526" metric="Following" showBorder={false} />
    </section>
  );
};

const ProfileMetric = ({
  label,
  metric,
  showBorder,
}: {
  label: string;
  metric: string;
  showBorder: boolean;
}) => {
  return (
    <article
      className={`flex flex-col items-center p-2 text-center min-w-16 ${showBorder && 'border-r border-greyAccent'} `}
    >
      <span className="text-black">{label}</span>
      <span className="text-gray-500 text-xs">{metric}</span>
    </article>
  );
};
