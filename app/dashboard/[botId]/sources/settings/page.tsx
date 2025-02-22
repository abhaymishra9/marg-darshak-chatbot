// app/dashboard/[botId]/settings/page.tsx
import Sidebar from "../../../../../components/Sidebar";

interface SettingsPageProps {
  params: { botId: string };
}

const SettingsPage: React.FC<SettingsPageProps> = ({ params }) => {
  const { botId } = params;

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="p-6 flex-1 bg-gray-50">
        <h1 className="text-2xl font-bold mb-4">Settings for Bot {botId}</h1>
        <div className="bg-white p-4 rounded-lg shadow">
          <p className="text-gray-600">Configure bot settings here.</p>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;