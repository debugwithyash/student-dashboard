export default function ActivityTile() {
  return (
    <section className="bg-zinc-900 rounded-3xl p-6">
      <h2 className="font-bold mb-4">
        Activity
      </h2>

      <div className="grid grid-cols-7 gap-2">
        {[...Array(35)].map((_, i) => (
          <div
            key={i}
            className="w-4 h-4 bg-green-500 rounded"
          />
        ))}
      </div>
    </section>
  );
}