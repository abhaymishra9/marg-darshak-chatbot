// app/dashboard/page.tsx
import Sidebar from "../../components/Sidebar";
import BotCard from "../../components/BotCard";

const Dashboard: React.FC = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 p-6 bg-gray-50">
        <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
        <button className="bg-purple-500 text-white px-4 py-2 rounded mb-4 hover:bg-purple-600">
          Create New Bot
        </button>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <BotCard
            name="New Bot"
            lastUpdated="3 days ago"
            chats="No chats in 30 days"
          />
        </div>
        <div className="mt-8 bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">Workspace Stats</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <p className="text-gray-600">Usage</p>
              <p className="font-medium">Characters used</p>
            </div>
            <div>
              <p className="text-gray-600">Inbox</p>
              <p className="font-medium">0</p>
            </div>
            <div>
              <p className="text-gray-600">Return on Investment</p>
              <p className="font-medium">$0</p>
            </div>
            <div>
              <p className="text-gray-600">Time Saved</p>
              <p className="font-medium">4 hrs 35s</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;