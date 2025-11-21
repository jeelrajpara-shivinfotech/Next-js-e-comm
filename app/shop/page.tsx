"use client";

import { useEffect, useState } from "react";
import { selectConst, shopCostants } from "@/constants/shopConstants";
import { getProducts } from "@/utils/productApi";
import BaseCard from "@/components/BaseComponents/BaseCard";
import BaseSelect from "@/components/BaseComponents/BaseSelect";
import BasePagination from "@/components/BaseComponents/BasePagination";
import BaseButton from "@/components/BaseComponents/BaseButton";
import BaseSkeleton from "@/components/BaseComponents/BaseSkeleton";
import { LuListFilter } from "react-icons/lu";
import { IoCloseSharp } from "react-icons/io5";
import { Products } from "@/types/products";

export default function Shop() {
  const [products, setProducts] = useState<Products[]>([]);
  const [filtered, setFiltered] = useState<Products[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [sortOption, setSortOption] = useState<string>("a-z");
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);
  const itemsPerPage = 6;
  const [openFilter, setOpenFilter] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const data = await getProducts();
      setProducts(data);
      setFiltered(data);

      const uniqueCats = Array.from(
        new Set(data?.map((p) => p?.category)?.filter(Boolean) ?? [])
      );
      setCategories(uniqueCats);
      setLoading(false);
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
      setFiltered(
        products?.filter((p) => categories?.includes(p?.category ?? "")) ?? []
      );
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
    <section className="container mx-auto px-5 lg:px-16 py-16">
      <div className="md:hidden flex mb-4">
        <button
          onClick={() => setOpenFilter(true)}
          className="px-4 py-2 bg-gray-200 rounded-lg flex gap-2 items-center"
        >
          <LuListFilter className="h-4 w-4" />
          {shopCostants?.filterAndSort}
        </button>
      </div>
      <div
        className={`fixed inset-0 bg-black/40 transition-opacity z-40 md:hidden ${
          openFilter ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setOpenFilter(false)}
      ></div>
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white shadow-xl z-50 p-6 transition-transform md:hidden flex flex-col ${
          openFilter ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold">{shopCostants?.filter}</h2>
          <BaseButton onClick={() => setOpenFilter(false)}>
            <IoCloseSharp className="w-6 h-6" />
          </BaseButton>
        </div>
        <p className="font-bold mb-2">{shopCostants.sortBy}</p>
        <BaseSelect
          type="select"
          options={selectConst}
          selected={sortOption}
          onChange={handleGenericChange}
          onSortChange={handleSort}
          data={filtered}
          sortKey="title"
        />
        <div className="mt-6">
          <BaseSelect
            title={shopCostants.category}
            type="checkbox"
            options={categories?.map((c) => ({ label: c, value: c })) ?? []}
            selected={selectedCategories}
            onChange={handleGenericChange}
            onCategoryChange={handleCategoryChange}
          />
        </div>
        <div className="mt-auto">
          <BaseButton
            onClick={() => setOpenFilter(false)}
            className="bg-black hover:bg-white text-white"
            fullWidth
          >
            {shopCostants?.apply}
          </BaseButton>
        </div>
      </div>
      <div className="justify-end items-center gap-3 mb-4 flex-wrap hidden md:flex">
        <p className="font-bold">{shopCostants.sortBy}</p>
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
        <aside className="lg:w-64 md:w-56 bg-gray-50 border border-gray-200 rounded-lg p-4 space-y-4 h-fit hidden md:block">
          <BaseSelect
            title={shopCostants?.category}
            type="checkbox"
            options={categories?.map((c) => ({ label: c, value: c })) ?? []}
            selected={selectedCategories}
            onChange={handleGenericChange}
            onCategoryChange={handleCategoryChange}
          />
        </aside>
        <div className="w-full md:flex-1 lg:flex-1">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {loading
              ? Array.from({ length: itemsPerPage }).map((_, i) => (
                  <BaseSkeleton key={i} />
                ))
              : paginatedData?.length > 0
              ? paginatedData.map((product) => (
                  <BaseCard key={product?.id} product={product} />
                ))
              : <p className="text-center col-span-full">{shopCostants?.noProducts}</p>}
          </div>
          {!loading && (
            <BasePagination
              currentPage={page}
              totalPages={totalPages}
              onPageChange={setPage}
              previousText={shopCostants?.previousPage}
              nextText={shopCostants?.nextPage}
            />
          )}
        </div>
      </div>
    </section>
  );
}
