import React from "react";
import Container from "../contener/Container";
import latestNews from "../../api/latestNews ";

function LatestNews() {
  return (
    <Container>
      <div className="py-5">
        <h1 className="md:text-[32px] text-[25px] pb-3 text-center font-bold">Latest News</h1>
        <div className="md:grid md:grid-cols-3 grid-cols-1 gap-6">
          {latestNews.slice(0, 3).map((item) => (
            <div
              key={item.id}
              className="border border-zinc-300 hover:shadow-2xl rounded-lg overflow-hidden md:mb-0 mb-3 relative"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-56 object-cover"
              />
              <div className="bg-zinc-300 text-black p-2 rounded-sm absolute top-40 left-3">
                <p className="text-[14px] font-bold">{item.day}</p>
                <p className="font-semibold text-[12px]">{item.month}</p>
              </div>
              <div className="p-4">
                <div className="flex gap-3 text-sm text-gray-500">
                  <span>{item.category}</span>
                  <span>{item.author}</span>
                  <span>{item.comments} Comments</span>
                  
                </div>

                <h3 className="font-semibold mt-2">{item.title}</h3>

                <button className="mt-4 text-green-600 font-semibold">
                  {item.button} →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}

export default LatestNews;
