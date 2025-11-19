import Link from "next/link";
import { GoDotFill } from "react-icons/go";

interface BreadcrumbProps {
  title: string;
  homeLabel?: string;
  currentLabel?: string;
}

export default function BaseHeader({
  title,
  homeLabel,
  currentLabel,
}: BreadcrumbProps) {
  return (
    <section className="w-full bg-gray-200/50 py-20 text-center">
      <h1 className="text-4xl font-medium mb-4">{title}</h1>

      <div className="flex justify-center items-center gap-2 text-gray-600">
        <Link href="/" className="text-xl">
          {homeLabel}
        </Link>
        <GoDotFill/>
        <div className="text-black font-medium text-xl">{currentLabel}</div>
      </div>
    </section>
  );
}
