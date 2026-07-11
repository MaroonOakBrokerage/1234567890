import Link from "next/link";

type LinkItem = { label: string; description: string; href: string };

export default function ContinueExploring({
  title = "Continue Exploring",
  items,
}: {
  title?: string;
  items: LinkItem[];
}) {
  return (
    <section className="bg-stone py-20">
      <div className="mx-auto max-w-[1200px] px-8">
        <p className="mb-4 text-center text-xs font-bold uppercase tracking-[3px] text-gold-dim">Keep Going</p>
        <h2 className="mx-auto mb-12 max-w-[720px] text-center font-serif text-3xl font-semibold text-maroon md:text-[34px]">
          {title}
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex flex-col rounded-lg border border-charcoal/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-md"
            >
              <h3 className="mb-2 font-serif text-lg font-semibold text-maroon">{item.label}</h3>
              <p className="mb-4 flex-1 font-sans text-[13.5px] text-[#55504a]">{item.description}</p>
              <span className="text-xs font-bold uppercase tracking-wide text-gold-dim group-hover:text-maroon">
                Explore &rarr;
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
