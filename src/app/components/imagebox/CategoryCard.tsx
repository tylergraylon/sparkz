import Image, { StaticImageData } from "next/image";
import Link from "next/link";

export type CategoryProps = {
  category: string;
  img: StaticImageData | string;
  link: string;
};

export default function CategoryCard({ category, img, link }: CategoryProps) {
  return (
    <Link href={link} className="group grid grid-rows-7 relative">
      <div className="row-span-6 relative">
        <div className={`w-full h-64`}>
          <Image
            alt="Image"
            src={img}
            fill
            style={{
              objectFit: "cover",
              // cover, contain, none
            }}
          />
        </div>
      </div>

      <div
        className={`flex px-3 py-3 items-center
                         text-white bg-[#4E4E4E]
                           text-xs lg:text:sm font-serrat`}
      >
        <div className="space-y-3 text-base">
          <h3>{category}</h3>
        </div>
      </div>
    </Link>
  );
}
