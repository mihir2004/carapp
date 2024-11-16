// src/components/Carousel.js
const Carousel = () => {
  const images = [
    "https://imgd-ct.aeplcdn.com/320x200/n/cw/ec/139651/curvv-exterior-right-front-three-quarter.jpeg?isig=0&q=80",
    "https://hips.hearstapps.com/hmg-prod/images/mclarenarturaflux-2-1613486108.jpg?crop=0.677xw:0.508xh;0.0357xw,0.163xh&resize=980:*",
    "https://media.architecturaldigest.com/photos/63079fc7b4858efb76814bd2/16:9/w_4000,h_2250,c_limit/9.%20DeLorean-Alpha-5%20%5BDeLorean%5D.jpg",
  ];

  return (
    <section className="py-10 bg-gray-800 text-white">
      <div className="container mx-auto">
        <h3 className="text-2xl font-bold text-center mb-6">
          Discover Stunning Cars
        </h3>
        <div className="carousel flex overflow-x-auto space-x-4">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Car ${index + 1}`}
              className="rounded shadow"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carousel;
