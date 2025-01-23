"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Filter() {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const router = useRouter();

  const activeFilter = searchParams.get("capacity") ?? "all";

  function handleFilter(filter) {
    const params = new URLSearchParams(searchParams);
    params.set("capacity", filter);
    router.replace(`${pathName}?${params.toString()}`, { scroll: false });
  }

  return (
    <div className="flex border border-primary-700">
      <Button
        filter="all"
        activeFilter={activeFilter}
        handleFilter={handleFilter}
      >
        All Cabins
      </Button>
      <Button
        filter="small"
        activeFilter={activeFilter}
        handleFilter={handleFilter}
      >
        2&mdash;4 Guests
      </Button>
      <Button
        filter="medium"
        activeFilter={activeFilter}
        handleFilter={handleFilter}
      >
        5&mdash;7 Guests
      </Button>
      <Button
        filter="large"
        activeFilter={activeFilter}
        handleFilter={handleFilter}
      >
        8&mdash;12 Guests
      </Button>
    </div>
  );
}

function Button({ children, filter, handleFilter, activeFilter }) {
  return (
    <button
      className={`px-5 py-2 hover:bg-primary-700 ${
        filter === activeFilter ? "bg-primary-800 text-primary-100" : ""
      }`}
      onClick={() => handleFilter(filter)}
    >
      {children}
    </button>
  );
}
