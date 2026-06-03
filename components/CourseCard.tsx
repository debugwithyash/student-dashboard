export default function CourseCard({
  title,
  progress,
}: {
  title: string;
  progress: number;
}) {
  return (
    <article className="bg-zinc-900 rounded-3xl p-6">
      <h3 className="text-lg font-bold">
        {title}
      </h3>

      <div className="mt-4 h-3 bg-zinc-700 rounded-full">
        <div
          className="h-3 bg-green-500 rounded-full"
          style={{ width: `${progress}%` }}
        />
      </div>

      <p className="mt-2 text-sm text-zinc-400">
        {progress}% Complete
      </p>
    </article>
  );
}