import Image from "next/image";

const avantApres = [
  { avant: "/avant1.jpg", apres: "/apres1.jpg" },
  { avant: "/avant2.jpg", apres: "/apres2.jpg" },
  { avant: "/avant3.jpg", apres: "/apres3.jpg" },
];

const carrousel = [
  "/realisation1.jpg",
  "/realisation2.jpg",
  "/realisation3.jpg",
  "/realisation4.jpg",
];

export default function RealisationsPage() {
  return (
    <div className="flex flex-col gap-20 py-16 px-6">
      {/* Section 1 : Avant / Après */}
      <section>
        <h1 className="text-3xl font-bold text-center mb-10">Avant / Après</h1>
        <div className="grid gap-8 md:grid-cols-3">
          {avantApres.map((item, idx) => (
            <div key={idx} className="bg-white shadow p-4 rounded-lg">
              <div>
                <p className="font-medium mb-1">Avant</p>
                <Image
                  src={item.avant}
                  alt="Avant"
                  width={400}
                  height={300}
                  className="rounded"
                />
              </div>
              <div className="mt-4">
                <p className="font-medium mb-1">Après</p>
                <Image
                  src={item.apres}
                  alt="Après"
                  width={400}
                  height={300}
                  className="rounded"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 2 : Carrousel */}
      <section>
        <h2 className="text-2xl font-semibold text-center mb-6">Nos réalisations en images</h2>
        <div className="flex gap-4 overflow-x-auto pb-4">
          {carrousel.map((src, idx) => (
            <Image
              key={idx}
              src={src}
              alt={`Réalisation ${idx + 1}`}
              width={300}
              height={200}
              className="rounded-lg shrink-0"
            />
          ))}
        </div>
      </section>
    </div>
  );
}
