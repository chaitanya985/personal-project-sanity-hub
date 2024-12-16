import Image from "next/image";
import { client, urlFor} from "../lib/sanity";
import Link from "next/link";

async function getHeroImage() {
    const query = `*[_type == "heroImage"][0]`;
    const data = await client.fetch(query);
    return data;
}

export default async function Hero() {
    const data = await getHeroImage();
    return (
        <section className="mx-auto max-w-2xl px-4 lg:max-w-7xl lg:px-8">
            <div className="mb-8 flex flex-wrap justify-between mb:mb-16">
                <div className="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48">
                    <h2 className="mb-4 text-2xl font-bold sm:text-5xl sm:leading-none lg:text-lg">
                        Your one stop shop for all your clothing needs
                    </h2>
                    <p className="text-sm text-gray-500 sm:text-sm">
                        Get your hands on the latest and greatest in fashion
                    </p>
                </div>
                <div className="mb-12 flex w-full md:mb-16 lg:w-2/3">
                    <div className="relative left-12 top-12 z-10 overflow-hidden rounded-lg bg-gray-100">
                        <Image
                            src={urlFor(data.image1).url()}
                            alt="hero image"
                            className="h-full w-full object-cover object-center"
                            width={1000}
                            height={1000} 
                        />
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
        <div className="flex h-12 w-64 divide-x overflow-hidden rounded-lg border">
          <Link
            href="/Men"
            className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
          >
            Men
          </Link>
          <Link
            href="/Women"
            className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
          >
            Women
          </Link>
          <Link
            href="/Kids"
            className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
          >
            Kids
          </Link>
          <Link
            href="/Seniors"
            className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
          >
            Seniors
          </Link>
        </div>
      </div>
        </section>
    )
}

