import Image from "next/image";
import Link from "next/link";
import { recipes } from "@/data/recipes";

export default function Home() {
  return (
    <div className="bg-neutral-100">
      <main
        id="top"
        className="mx-auto flex min-h-screen max-w-6xl flex-col gap-24 px-6 pb-24 pt-16 sm:px-10 lg:px-16"
      >
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-pink-200 via-rose-100 to-amber-100 p-10 shadow-xl sm:p-16 lg:p-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-white/70 via-transparent to-transparent" />
          <div className="relative grid gap-12 md:grid-cols-[2fr_3fr] md:items-center">
            <div className="space-y-6">
              <p className="inline-flex items-center rounded-full bg-white/80 px-3 py-1 text-sm font-medium uppercase tracking-[0.3em] text-rose-700 shadow">
                Cake Atelier
              </p>
              <h1 className="text-4xl font-semibold leading-tight text-rose-950 sm:text-5xl lg:text-6xl">
                10 Irresistible Cakes for Every Celebration
              </h1>
              <p className="text-lg leading-relaxed text-rose-900/80 sm:text-xl">
                Your digital patisserie awaits. Discover ten meticulously tested
                recipes with step-by-step guidance, professional tips, and
                stunning visuals to inspire your next showstopping bake.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#recipes"
                  className="rounded-full bg-rose-700 px-6 py-3 text-sm font-semibold uppercase tracking-widest text-rose-50 transition hover:bg-rose-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-rose-700"
                >
                  Explore the recipes
                </a>
                <a
                  href="#ebook-overview"
                  className="rounded-full border border-rose-600/60 px-6 py-3 text-sm font-semibold uppercase tracking-widest text-rose-800 transition hover:border-rose-700 hover:text-rose-900 focus-visible:outline focus-visible:outline-rose-600"
                >
                  How to use this ebook
                </a>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative aspect-[3/4] w-full max-w-sm overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?auto=format&fit=crop&w=900&q=80"
                  alt="Decorated vanilla cake with berries on a stand."
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section
          id="ebook-overview"
          className="grid gap-8 rounded-3xl bg-white p-8 shadow-xl sm:grid-cols-2 sm:p-12"
        >
          <div>
            <h2 className="text-3xl font-semibold text-rose-900 sm:text-4xl">
              About This Digital Cookbook
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-neutral-700">
              Each recipe has been curated to balance technique, flavor, and
              presentation. Whether you are baking for an intimate gathering or
              a grand celebration, these cakes deliver unforgettable moments.
            </p>
          </div>
          <div className="grid gap-4 text-neutral-700">
            <div className="rounded-2xl border border-rose-100 bg-rose-50/70 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-rose-600">
                Inside The Ebook
              </p>
              <ul className="mt-3 space-y-2 text-base leading-relaxed">
                <li>• Ingredient spotlights for elevated flavor.</li>
                <li>• Step-by-step techniques crafted for clarity.</li>
                <li>• Professional tips to perfect every slice.</li>
                <li>• Storage notes to extend freshness.</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-neutral-500">
                Recommended Tools
              </p>
              <div className="mt-3 grid grid-cols-2 gap-3 text-sm font-medium text-neutral-600 sm:grid-cols-3">
                <span className="rounded-full bg-white px-3 py-2 text-center shadow-sm">
                  Offset spatula
                </span>
                <span className="rounded-full bg-white px-3 py-2 text-center shadow-sm">
                  Cake turntable
                </span>
                <span className="rounded-full bg-white px-3 py-2 text-center shadow-sm">
                  Digital scale
                </span>
                <span className="rounded-full bg-white px-3 py-2 text-center shadow-sm">
                  Parchment rounds
                </span>
                <span className="rounded-full bg-white px-3 py-2 text-center shadow-sm">
                  Thermometer
                </span>
                <span className="rounded-full bg-white px-3 py-2 text-center shadow-sm">
                  Bench scraper
                </span>
              </div>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="toc-heading"
          className="rounded-3xl bg-white p-8 shadow-xl sm:p-12"
        >
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2
                id="toc-heading"
                className="text-3xl font-semibold text-rose-900 sm:text-4xl"
              >
                Table of Contents
              </h2>
              <p className="mt-2 text-lg text-neutral-600">
                Jump to any recipe and start baking instantly.
              </p>
            </div>
            <div className="rounded-full bg-rose-100 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-rose-700">
              10 Signature Cakes
            </div>
          </div>
          <div className="mt-8 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {recipes.map((recipe) => (
              <Link
                key={recipe.slug}
                href={`#${recipe.slug}`}
                className="group flex items-center justify-between rounded-2xl border border-rose-100 bg-rose-50/70 px-5 py-4 text-left transition hover:-translate-y-1 hover:border-rose-200 hover:bg-white hover:shadow-lg"
              >
                <span className="text-base font-semibold text-rose-900">
                  {recipe.title}
                </span>
                <span className="text-sm font-medium text-rose-500 transition group-hover:text-rose-700">
                  View →
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section id="recipes" className="space-y-16">
          {recipes.map((recipe, index) => (
            <article
              key={recipe.slug}
              id={recipe.slug}
              className="rounded-3xl bg-white p-8 shadow-xl ring-1 ring-rose-100/60 sm:p-12"
            >
              <div className="grid gap-8 lg:grid-cols-[2fr_3fr] lg:gap-12">
                <div className="space-y-5">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-rose-100 shadow-lg">
                    <Image
                      src={recipe.image.src}
                      alt={recipe.image.alt}
                      fill
                      className="object-cover transition duration-700 hover:scale-105"
                    />
                  </div>
                  <p className="text-sm text-neutral-500">
                    Photo credit: {recipe.image.author}
                  </p>
                  <div className="flex flex-wrap gap-3 text-sm font-medium text-neutral-600">
                    <span className="rounded-full border border-rose-200 bg-rose-50 px-4 py-1">
                      Prep • {recipe.prepTime}
                    </span>
                    <span className="rounded-full border border-rose-200 bg-rose-50 px-4 py-1">
                      Bake • {recipe.cookTime}
                    </span>
                    <span className="rounded-full border border-rose-200 bg-rose-50 px-4 py-1">
                      Serves • {recipe.servings}
                    </span>
                  </div>
                </div>
                <div className="space-y-8">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-rose-500">
                      Recipe {index + 1}
                    </p>
                    <h3 className="mt-2 text-3xl font-semibold text-rose-900 sm:text-4xl">
                      {recipe.title}
                    </h3>
                    <p className="mt-4 text-lg leading-relaxed text-neutral-700">
                      {recipe.description}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-neutral-200 bg-neutral-50/80 p-6">
                    <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-neutral-500">
                      Inspiration
                    </h4>
                    <p className="mt-3 text-base leading-relaxed text-neutral-700">
                      {recipe.inspiration}
                    </p>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <h4 className="text-lg font-semibold text-rose-900">
                        Ingredients
                      </h4>
                      <ul className="mt-3 list-disc space-y-2 pl-5 text-neutral-700">
                        {recipe.ingredients.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-rose-900">
                        Method
                      </h4>
                      <ol className="mt-3 space-y-3 text-neutral-700">
                        {recipe.method.map((step, stepIndex) => (
                          <li key={stepIndex} className="flex gap-3">
                            <span className="mt-1 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-rose-600 text-xs font-semibold text-rose-50">
                              {stepIndex + 1}
                            </span>
                            <span>{step}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl border border-rose-100 bg-rose-50 p-5">
                      <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-rose-600">
                        Pro Tip
                      </h4>
                      <p className="mt-2 text-neutral-700">{recipe.proTip}</p>
                    </div>
                    <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-5">
                      <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">
                        Storage
                      </h4>
                      <p className="mt-2 text-neutral-700">{recipe.storage}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-4 border-t border-neutral-200 pt-6">
                    <a
                      href="#top"
                      className="text-sm font-semibold uppercase tracking-[0.3em] text-rose-600 transition hover:text-rose-800"
                    >
                      Back to top ↑
                    </a>
                    <div className="text-sm text-neutral-500">
                      Recipe index {index + 1} of {recipes.length}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </section>

        <section className="rounded-3xl bg-gradient-to-r from-rose-600 via-rose-500 to-amber-400 p-[1px] shadow-xl">
          <div className="rounded-[calc(1.5rem-1px)] bg-white p-8 sm:p-12">
            <div className="grid gap-6 md:grid-cols-[2fr_3fr] md:items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-semibold text-rose-900 sm:text-4xl">
                  Ready to Bake Like a Pastry Pro?
                </h2>
                <p className="text-lg text-neutral-700">
                  Save this ebook, share it with fellow bakers, and tag your
                  creations with{" "}
                  <span className="font-semibold text-rose-600">
                    #CakeAtelier
                  </span>{" "}
                  for a chance to be featured in our community showcase.
                </p>
                <p className="text-sm text-neutral-500">
                  You can print this page or export it as a PDF from your
                  browser to keep the recipes handy in your kitchen.
                </p>
              </div>
              <div className="rounded-2xl border border-rose-100 bg-rose-50/80 p-6">
                <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-rose-600">
                  Quick Reference
                </h3>
                <dl className="mt-4 grid grid-cols-1 gap-4 text-sm text-neutral-700 sm:grid-cols-2">
                  <div>
                    <dt className="font-semibold text-rose-700">
                      Skill Level
                    </dt>
                    <dd>Intermediate with guided support</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-rose-700">Dietary</dt>
                    <dd>Includes gluten-free and flourless options</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-rose-700">Occasions</dt>
                    <dd>
                      Birthdays, weddings, brunches, and celebratory evenings
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-rose-700">Serving</dt>
                    <dd>10–15 guests per cake on average</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
