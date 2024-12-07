export default function PopularBrands() {
  const brands = [
    {
      name: "adidas",
      image:
        "https://imagedelivery.net/8UvgnujKc71BuSRDtL99OQ/27168824-085b-4f17-0d4b-9e3599670700/145x75",
    },
    {
      name: "nike",
      image:
        "https://imagedelivery.net/8UvgnujKc71BuSRDtL99OQ/997c716c-f05f-4fcc-f1c3-5177b5425800/145x75",
    },
    {
      name: "puma",
      image:
        "https://imagedelivery.net/8UvgnujKc71BuSRDtL99OQ/0368611e-9b9b-4c05-00cd-4c898ff97700/145x75",
    },
    {
      name: "kappa",
      image:
        "https://imagedelivery.net/8UvgnujKc71BuSRDtL99OQ/eb54011f-68ab-470e-3a66-3faa9c5cbd00/145x75",
    },
    {
      name: "umbro",
      image:
        "https://imagedelivery.net/8UvgnujKc71BuSRDtL99OQ/ebc4b40f-ed38-4d8b-c629-6ae45cef5e00/145x75",
    },
  ];
  return (
    <section className="container mx-auto">
      <div>
        <h1 className="font-semibold text-2xl text-gray-950">Popular Brands</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 py-12">
        {brands.map((brand, index) => (
          <div className="mx-auto" key={index}>
            <img alt={brand.name} src={brand.image} />
          </div>
        ))}
      </div>
    </section>
  );
}
