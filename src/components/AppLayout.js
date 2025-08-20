export default function AppLayout({ children }) {
  return (
    <div className="bg-white text-black dark:bg-gray-900 dark:text-white min-h-screen transition-colors duration-300">
      {children}
    </div>
  );
}
