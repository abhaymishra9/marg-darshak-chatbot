// components/Sidebar.tsx
const Sidebar: React.FC = () => {
    return (
      <div className="w-64 bg-black text-white p-4 h-screen">
        <h2 className="text-xl font-bold mb-6">Marg Darshak</h2>
        <nav className="space-y-4">
          <a
            href="/dashboard"
            className="block p-2 hover:bg-gray-800 rounded"
          >
            Dashboard
          </a>
          <a
            href="#"
            className="block p-2 hover:bg-gray-800 rounded"
          >
            Home
          </a>
          <a
            href="#"
            className="block p-2 hover:bg-gray-800 rounded"
          >
            API & Integrations
          </a>
        </nav>
      </div>
    );
  };
  
  export default Sidebar;