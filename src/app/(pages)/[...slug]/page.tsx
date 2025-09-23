import Link from "next/link";

export default function CatchAllPage({ params }: { params: { slug: string[] } }) {
  const path = "/" + (params.slug?.join("/") || "");
  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-2xl font-semibold tracking-tight text-gray-900">{path}</h1>
      <p className="mt-2 text-gray-600">This is a placeholder page. You can build out real content here.</p>
      <p className="mt-6 text-sm text-gray-500">
        <Link className="text-blue-600 underline" href="/">Go back home</Link>
      </p>
    </div>
  );
}


