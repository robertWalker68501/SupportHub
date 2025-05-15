const PageHeader = ({ title, icon }: { title: string, icon: React.ReactNode }) => {
  return (
    <div className="border rounded-md p-3 shadow">
        <div className="flex items-center gap-2">
            {icon}
            <h2 className="text-2xl font-semibold text-cyan-800">{title}</h2>
        </div>
        
    </div>
  );
};

export default PageHeader;