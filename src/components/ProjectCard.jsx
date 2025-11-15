export default function ProjectCard({ title, desc, tag }) {
  return (
    <div className="p-6 rounded-2xl bg-gray-800 shadow-lg">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-gray-300">{desc}</p>
      <div className="mt-4 text-xs text-gray-400">{tag}</div>
    </div>
  );
}
