// components/BotCard.tsx
interface BotCardProps {
    name: string;
    lastUpdated: string;
    chats: string;
  }
  
  const BotCard: React.FC<BotCardProps> = ({ name, lastUpdated, chats }) => {
    return (
      <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white">
            🤖
          </div>
          <h3 className="font-semibold">{name}</h3>
        </div>
        <p className="text-gray-600 text-sm">{lastUpdated}</p>
        <p className="text-gray-600 text-sm">{chats}</p>
        <button className="mt-2 bg-purple-500 text-white px-2 py-1 rounded text-sm hover:bg-purple-600">
          General Bot
        </button>
      </div>
    );
  };
  
  export default BotCard;