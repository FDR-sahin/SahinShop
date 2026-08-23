import React from "react";
import Container from "../../components/contener/Container";

import con1 from "../../assets/con1.png";
import con2 from "../../assets/con2.png";
import con3 from "../../assets/con3.png";
import PageBanner from "../../components/PageBanner/PageBanner";

function Contact() {
  return (
    <>
     
      <PageBanner links="contact"/>
      

      <Container>
        <div className="flex justify-between gap-4 mb-10">
          <div className="bg-white rounded-sm shadow-2xl p-4 flex flex-col gap-2 ">
            <div className="flex flex-col items-center justify-between">
              <img className="mb-4" src={con1} alt="" />
              <p className="text-[#333333] text-[16px]">
                2715 Ash Dr. San Jose, South Dakota 83475
              </p>
            </div>
            <div className="flex flex-col items-center justify-between">
              <img className="mb-4" src={con2} alt="" />
              <p className="text-[#333333] text-[16px]">
                Proxy@gmail.com Help.proxy@gmail.com
              </p>
            </div>
            <div className="flex flex-col items-center justify-between">
              <img className="mb-4" src={con3} alt="" />
              <p className="text-[#333333] text-[16px]">
                2715 Ash Dr. San Jose, South Dakota 83475(219) 555-0114 (164)
                333-0487
              </p>
            </div>
          </div>

          <div className="bg-white rounded-sm shadow-2xl p-4">
            <h4 className="text-[24px] font-bold mb-2">Just Say Hello!</h4>
            <p className="text-[14px] w-[486px] text-[#808080] mb-2">
              Do you fancy saying hi to me or you want to get started with your
              project and you need my help? Feel free to contact me.
            </p>
            <form action="">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-[434px] h-[49px] border border-zinc-300 rounded-sm">
                  {" "}
                  <input
                    className="w-full h-full outline-none px-3"
                    type="text"
                    placeholder="Template Cookie"
                  />
                </div>
                <div className="w-[434px] h-[49px] border border-zinc-300 rounded-sm">
                  {" "}
                  <input
                    className="w-full h-full outline-none px-3"
                    type="email"
                    placeholder="zakirsoft@gmail.com"
                  />
                </div>
              </div>
              <div className="w-full h-[49px] border border-zinc-300 hover:border-green-500 rounded-sm mb-4">
                {" "}
                <input
                  className="w-full h-full  outline-none px-3"
                  type="text"
                  placeholder="hello!"
                />
              </div>
              <div className="mb-7">
                <textarea
                  id="message"
                  rows="4"
                  placeholder="Subjects"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-y text-gray-800 placeholder-gray-400 text-sm shadow-sm transition duration-200"
                />
              </div>

              <button className="bg-[#00B207]  text-white text-[14px]  rounded-3xl px-[25px] py-[11px]">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </Container>

      <div className="w-full h-[300px] rounded-xl overflow-hidden shadow-md">
        <iframe
          title="Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233667.8223908687!2d90.25487229239851!3d23.780887457084543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
}

export default Contact;
