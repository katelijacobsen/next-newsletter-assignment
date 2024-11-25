import { getSubs } from "@/lib/api";
import Link from "next/link";

async function SubList({ updated }) {
  const subs = await getSubs();
  return (
    <div className="p-4 bg-gray-100">
      <ul className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4">
        {subs.map((sub) => (
          <li
            data-updated={sub.id.toString() === updated}
            key={sub.id}
            className="bg-white shadow rounded-lg overflow-hidden data-[updated='true']:outline-green-600 data-[updated='true']:outline"
          >
            <Link
              href={`/update/${sub.id}`}
              className="block p-4 hover:bg-gray-50 transition-colors duration-300"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {sub.name}
                  </h3>
                  <p className="text-sm text-gray-500">{sub.email}</p>
                </div>
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SubList;
