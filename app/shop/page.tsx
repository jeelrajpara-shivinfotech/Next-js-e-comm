"use client";

import { useEffect, useState } from "react";
import { selectConst, shopCostants } from "@/constants/shopConstants";
import { getProducts } from "@/utils/productApi";
import BaseCard from "@/components/BaseComponents/BaseCard";
import { Products } from "@/types/products";
import BaseSelect from "@/components/BaseComponents/BaseSelect";

export default function Shop() {
  const [products, setProducts] = useState<Products[]>([]);
  const [filtered, setFiltered] = useState<Products[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [sortOption, setSortOption] = useState<string>("a-z");

  const [page, setPage] = useState<number>(1);
  const itemsPerPage = 6;

  useEffect(() => {
    (async () => {
      const data = await getProducts();
      setProducts(data);
      setFiltered(data);

      const uniqueCats = Array.from(new Set(data.map((p) => p.category)));
      setCategories(uniqueCats);
    })();
  }, []);
  const handleCategoryChange = (category: string) => {
    setPage(1);

    let updated;
    if (selectedCategories.includes(category)) {
      updated = selectedCategories.filter((c) => c !== category);
    } else {
      updated = [...selectedCategories, category];
    }

    setSelectedCategories(updated);

    if (updated.length === 0) {
      setFiltered(products);
    } else {
      setFiltered(products.filter((p) => updated.includes(p.category)));
    }
  };
  const handleSort = (value: string) => {
    setSortOption(value);
    const sorted = [...filtered];

    switch (value) {
      case "a-z":
        sorted.sort((a, b) => (a.title ?? "").localeCompare(b.title ?? ""));
        break;
      case "z-a":
        sorted.sort((a, b) => (b.title ?? "").localeCompare(a.title ?? ""));
        break;
      case "price-low-high":
        sorted.sort((a, b) => (a.price ?? 0) - (b.price ?? 0));
        break;
      case "price-high-low":
        sorted.sort((a, b) => (b.price ?? 0) - (a.price ?? 0));
        break;
    }
    setFiltered(sorted);
  };
  const start = (page - 1) * itemsPerPage;
  const paginatedData = filtered.slice(start, start + itemsPerPage);
  const totalPages = Math.ceil(filtered.length / itemsPerPage);

  return (
    <section>
      <div className="p-6">
        <div className="flex justify-end items-center align-middle gap-3 mb-4">
          <p className="font-bold">{shopCostants?.sortBy}</p>
          <BaseSelect
            type="select"
            options={selectConst}
            selected={sortOption}
            onChange={handleSort}
          />
        </div>
        <div className="mt-6 flex gap-6 flex-wrap">
          <aside className="lg:w-64 w-full bg-gray-50 border border-gray-200 rounded-lg p-4 space-y-4 h-fit">
            <BaseSelect
              title={shopCostants?.category}
              type="checkbox"
              options={categories?.map((c) => ({ label: c, value: c }))}
              selected={selectedCategories}
              onChange={handleCategoryChange}
            />
          </aside>
          <div className="md:flex-1 lg:flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {paginatedData.map((product) => (
                <BaseCard key={product?.id} product={product} />
              ))}
              {paginatedData?.length === 0 && (
                <p className="text-center col-span-full">{shopCostants?.noProducts}</p>
              )}
            </div>
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-3 mt-8 select-none">
                <button
                  disabled={page === 1}
                  onClick={() => setPage((prev) => prev - 1)}
                  className={`text-sm ${page === 1
                    ? "opacity-40 cursor-not-allowed hidden"
                    : "hover:underline"
                    }`}
                >
                  {shopCostants?.previousPage}
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                  <button
                    key={p}
                    onClick={() => setPage(p)}
                    className={`cursor-pointer px-2 ${p === page
                      ? "font-semibold underline"
                      : "hover:underline"
                      }`}
                  >
                    {p}
                  </button>
                ))}
                <button
                  disabled={page === totalPages}
                  onClick={() => setPage((prev) => prev + 1)}
                  className={` ${page === totalPages
                    ? "opacity-40 cursor-not-allowed hidden"
                    : "hover:underline"
                    }`}
                >
                  {shopCostants?.nextPage}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
