// app/dashboard/[botId]/sources/[tab]/page.tsx
import Sidebar from "../../../../../components/Sidebar";

interface TabPageProps {
  params: { botId: string; tab: string };
}

const TabPage: React.FC<TabPageProps> = ({ params }) => {
  const { botId, tab } = params;

  const renderContent = (): React.ReactNode => {  // Explicitly type the return as ReactNode
    switch (tab) {
      case "files":
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Files for Bot {botId}</h1>
            {/* File content */}
          </div>
        );
      case "spreadsheets":
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">
              Spreadsheets for Bot {botId}
            </h1>
            {/* Spreadsheet content */}
          </div>
        );
      case "faqs":
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">FAQs for Bot {botId}</h1>
            {/* FAQ content */}
          </div>
        );
      default:
        return <div>Tab not found</div>;
    }
  };

  return (
    <div className="flex h-screen">
      <Sidebar />
      {renderContent()}
    </div>
  );
};

export default TabPage;