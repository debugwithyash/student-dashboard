import Sidebar from "@/components/Sidebar";
import HeroTile from "@/components/HeroTile";
import ActivityTile from "@/components/ActivityTile";
import CourseCard from "@/components/CourseCard";
import { supabase } from "@/lib/supabase";

export default async function DashboardPage() {
  const { data: courses } = await supabase
  .from("courses")
  .select("*");
  

  return (
    <main className="flex min-h-screen bg-black text-white">
      <Sidebar />

      <section className="flex-1 p-6">
        <HeroTile />

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          {courses?.map((course) => (
            <CourseCard
              key={course.id}
              title={course.title}
              progress={course.progress}
            />
          ))}
        </div>

        <div className="mt-6">
          <ActivityTile />
        </div>
      </section>
    </main>
  );
}