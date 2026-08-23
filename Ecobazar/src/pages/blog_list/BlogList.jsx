import React, { useState } from "react";
import PageBanner from "../../components/PageBanner/PageBanner";
import BlogShopHed from "../../components/blogshophed/BlogShopHed";
import { IoSearch } from "react-icons/io5";
import { IoChevronUp, IoFilterOutline, IoClose } from "react-icons/io5";
import allProducts from "../../api/allProducts";
import Container from "../../components/contener/Container";
import cal from "../../assets/calander.png";
import latestNews from "../../api/latestNews ";
import Subscrive from "../../components/subscribe/Subscrive";

function BlogList() {
  const [activeTag, setActiveTag] = useState("");

  const tags = [
    "Healthy",
    "Low fat",
    "Vegetarian",
    "Bread",
    "Kid foods",
    "Vitamins",
    "Snacks",
    "Tiffin",
    "Meat",
    "Launch",
    "Dinner",
  ];

  const date = new Date("2021-04-25");

  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <>
      <div>
        <PageBanner links="blog" />
      </div>

      <div>
        <BlogShopHed />
      </div>

      <Container>
        
        {/* Mobile Filter Button */}
        <div className="lg:hidden my-1 flex justify-between items-center">
          <button
            onClick={() => setIsFilterOpen(true)}
            className="flex items-center gap-2 bg-[#00B207] text-white px-4 py-2.5 rounded-full text-sm font-semibold shadow-md active:scale-95 transition"
          >
            Filter <IoFilterOutline className="text-sm" />
          </button>
          <div className="lg:hidden flex items-center gap-1">
            <span className="font-bold">16</span>
            <p className="text-gray-400">Result Found</p>
        </div>
        </div>





        <div className="flex flex-col lg:flex-row justify-between gap-6 mb-8 relative">

           {/* Overlay (মোবাইলে ব্যাকগ্রাউন্ড আবছা করার জন্য) */}
          {isFilterOpen && (
            <div
              onClick={() => setIsFilterOpen(false)}
              className="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-sm"
            />
          )}
          
          <div className={`
              fixed top-0 left-0 h-full w-[310px] bg-white z-50 p-5 overflow-y-auto transition-transform duration-300 ease-in-out shadow-2xl
              lg:static lg:translate-x-0 lg:z-auto lg:p-0 lg:shadow-none lg:w-[330px] lg:h-auto lg:overflow-visible
              ${isFilterOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
            `}>
            {/* Mobile Header with Close Button */}
            <div className="flex items-center justify-between lg:hidden mb-4 pb-2 border-b">
              <h3 className="text-lg font-bold text-gray-800">Filter Products</h3>
              <button
                onClick={() => setIsFilterOpen(false)}
                className="p-1.5 rounded-full hover:bg-gray-100 text-gray-600"
              >
                <IoClose className="text-2xl" />
              </button>
            </div>


            {/* //search */}
            <div className="flex border border-zinc-300   items-center gap-2 md:w-[330px] w-[260px] h-[45px] bg-white p-1 rounded-[10px]">
              <IoSearch className="text-[25px]" />
              <input
                className=" outline-none w-full"
                type="text"
                placeholder="search"
              />
            </div>
            {/* // cataghory */}
            <div className="border-b-1 border-b-zinc-300 py-3">
              <h3 className="text-[20px] font-semibold mb-3">Top Categories</h3>

              <div className="flex items-center justify-between gap-3 mb-2">
                <p>Fresh Fruit</p>
                <span className="text-gray-400">(134)</span>
              </div>
              <div className="flex items-center justify-between gap-3 mb-2">
                <p>Vegetables</p>
                <span className="text-gray-400">(154)</span>
              </div>
              <div className="flex items-center justify-between gap-3 mb-2">
                <p>Cooking</p>
                <span className="text-gray-400">(74)</span>
              </div>
              <div className="flex items-center justify-between gap-3 mb-2">
                <p>Snacks</p>
                <span className="text-gray-400">(44)</span>
              </div>
              <div className="flex items-center justify-between gap-3 mb-2">
                <p>Beverages</p>
                <span className="text-gray-400">(34)</span>
              </div>
              <div className="flex items-center justify-between gap-3 mb-2">
                <p>Beauty & Health</p>
                <span className="text-gray-400">(234)</span>
              </div>
              <div className="flex items-center justify-between gap-3 mb-2">
                <p>Bread & Bakery</p>
                <span className="text-gray-400">(124)</span>
              </div>
            </div>
            {/* //tag */}

            <div className="py-3">
              <h3 className="text-[20px] font-semibold mb-4">Popular Tag</h3>

              <div className="flex flex-wrap gap-2">
                {tags.map((tagbtn, index) => {
                  return (
                    <button
                      key={index}
                      onClick={() => setActiveTag(tagbtn)}
                      className={` cursor-pointer px-4 py-2 rounded-full transition duration-300 ${activeTag === tagbtn ? "bg-[#00B207] text-white" : "bg-[#F2F2F2] text-black"}`}
                    >
                      {tagbtn}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* //gallary */}

            <div>
              <h3 className="text-[20px] font-semibold mb-3">Our Gallery</h3>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
                {allProducts.slice(0, 8).map((imge, i) => {
                  return (
                    <img
                      key={i}
                      className="border border-zinc-300 w-[120px] h-[75px] rounded-xl"
                      src={imge.image}
                      alt=""
                    />
                  );
                })}
              </div>
            </div>

            {/* //recently add */}

            <div className="py-3">
              <h3 className="text-[20px] font-semibold mb-4">Popular Tag</h3>

              <div className="flex flex-col gap-2">
                {allProducts.slice(9, 12).map((product, indexs) => {
                  return (
                    <div className="flex items-center gap-2" key={indexs}>
                      <div>
                        {" "}
                        <img
                          className=" w-[100px] h-[100px] rounded-xl border border-zinc-300"
                          src={product.image}
                          alt=""
                        />{" "}
                      </div>
                      <div>
                        <p className="font-bold">{product.name}</p>
                        <div className="flex items-center gap-2">
                          <img src={cal} alt="" />
                          <span>
                            {new Date().toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            })}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="flex-2">
            <div className="md:grid md:grid-cols-2 grid-cols-1 gap-6">
              {latestNews.map((item) => (
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

        </div>
      </Container>
      <Subscrive />
    </>
  );
}

export default BlogList;
