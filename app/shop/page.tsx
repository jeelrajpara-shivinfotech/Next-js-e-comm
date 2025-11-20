"use client";

import { useEffect, useState } from "react";
import { selectConst, shopCostants } from "@/constants/shopConstants";
import { getProducts } from "@/utils/productApi";
import BaseCard from "@/components/BaseComponents/BaseCard";
import { Products } from "@/types/products";
import BaseSelect from "@/components/BaseComponents/BaseSelect";
import BasePagination from "@/components/BaseComponents/BasePagination";

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
      
      const uniqueCats = Array.from(new Set(data?.map((p) => p?.category)?.filter(Boolean) ?? []));
      setCategories(uniqueCats);
    })();
  }, []);
  const handleSort = (value: string, sortedData?: Products[]) => {
    setSortOption(value);
    if (sortedData) {
      setFiltered(sortedData);
    }
  };
  const handleCategoryChange = (categories: string[]) => {
    setPage(1);
    setSelectedCategories(categories);

    if (categories?.length === 0) {
      setFiltered(products);
    } else {
      setFiltered(products?.filter((p) => categories?.includes(p?.category ?? '')) ?? []);
    }
  };
  const handleGenericChange = (value: string | string[]) => {
    if (Array.isArray(value)) {
      setSelectedCategories(value);
    } else {
      setSortOption(value);
    }
  };
  const start = (page - 1) * itemsPerPage;
  const paginatedData = filtered?.slice(start, start + itemsPerPage) ?? [];
  const totalPages = Math.ceil((filtered?.length ?? 0) / itemsPerPage);

  return (
    <section>
      <div className="p-6">
        <div className="flex justify-end items-center align-middle gap-3 mb-4">
          <p className="font-bold">{shopCostants?.sortBy}</p>
          <BaseSelect
            type="select"
            options={selectConst}
            selected={sortOption}
            onChange={handleGenericChange}
            onSortChange={handleSort}
            data={filtered}
            sortKey="title"
          />
        </div>
        <div className="mt-6 flex gap-6 flex-wrap">
          <aside className="lg:w-64 w-full bg-gray-50 border border-gray-200 rounded-lg p-4 space-y-4 h-fit">
            <BaseSelect
              title={shopCostants?.category}
              type="checkbox"
              options={categories?.map((c) => ({ label: c, value: c })) ?? []}
              selected={selectedCategories}
              onChange={handleGenericChange}
              onCategoryChange={handleCategoryChange}
            />
          </aside>
          <div className="md:flex-1 lg:flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {paginatedData?.map((product) => (
                <BaseCard key={product?.id} product={product} />
              ))}
              {paginatedData?.length === 0 && (
                <p className="text-center col-span-full">{shopCostants?.noProducts}</p>
              )}
            </div>
            <BasePagination
              currentPage={page}
              totalPages={totalPages}
              onPageChange={setPage}
              previousText={shopCostants?.previousPage}
              nextText={shopCostants?.nextPage}
            />
          </div>
        </div>
      </div>
    </section>
  );
}