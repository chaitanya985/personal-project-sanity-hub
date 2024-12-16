import ImageGallery from "@/app/components/ImageGallery";
import { allProducts } from "@/app/interface";
import { client } from "@/app/lib/sanity";
import { Star, Truck } from "lucide-react";
import AddToCart from "@/app/components/AddToCart";
import BuyNow from "@/app/components/BuyNow";



async function getData(slug: string) {
  const query = `*[_type == "product" && slug.current == "${slug}"][0] {
        _id,
          images,
          price,
          title,
          description,
          "slug": slug.current,
          "categoryName": category->name,
          id
      }`;

  const data = await client.fetch(query);

  return data;
}

export const dynamic = "force-dynamic";

export default async function ProductPge({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;

  const data: allProducts = await getData(slug);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          <ImageGallery images={data.images} />

          <div className="md:py-8">
            <div className="mb-2 md:mb-3">
              <span className="mb-0.5 inline-block text-gray-500 text-3xl font-bold">
                {data.title}
              </span>
              {/* <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">
                {data.title}
              </h2> */}
            </div>
            <div className="mb-2 flex items-center gap-3 md:mb-10">
              <p className="rounded-full gap-x-2">
                <span className="text-sm text-gray-500">Rating 4.2</span>
              </p>
              <span className="text-sm text-black transition duration-100">
                (56 People Reviewed)
              </span>
            </div>
            <p className="mt-12 text-base text-gray-500 tracking-wide">
              {data.description}
            </p>
            <div className="mb-4">
              <div className="flex items-end gap-2">
                <span className="text-xl font-bold text-gray-800 md:text-2xl">
                  Rs {data.price}
                </span>
                <span className="mb-0.5 text-red-500 line-through">
                  Rs {data.price + 1600}
                </span>
              </div>
            </div>

            <div className="mb-6 flex items-center gap-2 text-gray-500">
              <Truck className="w-6 h-6" />
              <span className="text-sm">2-4 Day Shipping</span>
            </div>

            <div className="flex gap-2.5">
              <AddToCart
                currency="INR"
                description={data.description}
                image={data.images[0]}
                title={data.title}
                price={data.price}
                id={data.id}
              />
              <BuyNow
                currency="INR"
                description={data.description}
                image={data.images[0]}
                title={data.title}
                price={data.price}
                key={data._id}
                id={data.id}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}