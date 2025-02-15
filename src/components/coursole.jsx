import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const carouselItems = [
  {
    img: "https://images.ixigo.com/image/upload/trains/trains/6d151c1fd7008b79f5f6b51b934bfb71-ztjll.webp",
    title: "Instant & full refunds",
    highlight: "with Assured",
    bgColor: "bg-blue-100",
  },
  {
    img: "/path-to-icon2.svg",
    title: "Save up to 40% with",
    highlight: "intelligent fare alerts",
    bgColor: "bg-yellow-100",
  },
  {
    img: "/path-to-icon3.svg",
    title: "Track flight delays,",
    highlight: "boarding gate & baggage belt",
    bgColor: "bg-purple-100",
  },
  {
    img: "./coursole/customer-support.jpg",
    title: "24x7",
    highlight: "customer support",
    bgColor: "bg-orange-100",
  },
  {
    img: "/path-to-icon5.svg",
    title: "Lowest fares",
    highlight: "with ixigo",
    bgColor: "bg-pink-100",
  },
];


function Carousel()  {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? carouselItems.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === carouselItems.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full flex flex-col items-center py-6">
      <h2 className="text-lg md:text-xl font-semibold mb-4">Why Book With ixigo?</h2>
      <div className="relative w-full max-w-4xl overflow-hidden">
        <div className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {carouselItems.map((item, index) => (
            <div
              key={index}
              className={`flex flex-shrink-0 w-full md:w-1/3 lg:w-1/5 p-4 ${item.bgColor} rounded-lg shadow-md flex-col items-center justify-center text-center mx-2`}
            >
              <img src={item.img} alt="icon" className="w-12 h-12 mb-2" />
              <p className="text-sm font-medium">{item.title} <span className="font-bold">{item.highlight}</span></p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex mt-4 space-x-4">
        <button onClick={prevSlide} className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
          <ChevronLeft size={20} />
        </button>
        <button onClick={nextSlide} className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}


export default Carousel;
