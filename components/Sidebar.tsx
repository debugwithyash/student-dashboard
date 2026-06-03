import { Home, BookOpen, User } from "lucide-react";

export default function Sidebar() {
  return (
    <nav className="w-64 bg-zinc-900 text-white p-6 min-h-screen">
      <h1 className="text-2xl font-bold mb-8">
        LearnX
      </h1>

      <ul className="space-y-6">
        <li className="flex items-center gap-3">
          <Home size={20} />
          Dashboard
        </li>

        <li className="flex items-center gap-3">
          <BookOpen size={20} />
          Courses
        </li>

        <li className="flex items-center gap-3">
          <User size={20} />
          Profile
        </li>
      </ul>
    </nav>
  );
}