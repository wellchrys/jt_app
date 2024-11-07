type Props = {
  title: string;
  children?: React.ReactNode;
};

export default function DashboardMainHeaderTitle({ title, children }: Props) {
  return (
    <header className="pt-6">
      <div
        className="mx-auto px-4 flex items-center gap-x-3"
        style={{
          padding: '0 6rem',
        }}
      >
        <h1 className="text-2xl font-bold text-gray-dark400">{title}</h1>
        <div className="flex items-center justify-end flex-1">{children}</div>
      </div>
    </header>
  );
}
