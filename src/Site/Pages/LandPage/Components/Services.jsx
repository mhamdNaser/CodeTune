import React from "react";
import { FaHeart, FaShoppingCart, FaPalette, FaSyncAlt } from "react-icons/fa";

export default function Services() {
  return (
    <div className="p-12 w-[70%] m-auto text-primary-text">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold  mb-4">Our Services</h2>
        <p className="text-lg">
          We offer a range of services designed to elevate your digital presence
          and ensure your business thrives in the online world. Our team
          specializes in creating tailored solutions that meet your unique needs
          and help you achieve your goals.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-blocks-color p-6 rounded-lg shadow-lg flex items-start">
          <div>
            <h3 className="text-xl font-semibold flex items-center gap-x-3 border-b h-20">
              <div className="bg-violetColor text-white p-3 rounded-lg">
                <FaHeart size={22} />
              </div>
              Custom Web Development
            </h3>
            <p className="mt-2 text-lg w-[95%]">
              Transform your ideas into dynamic websites and web applications
              tailored to your business needs. We leverage cutting-edge
              technologies to build solutions that are both functional and
              visually captivating.
            </p>
          </div>
        </div>

        <div className="bg-blocks-color p-6 rounded-lg shadow-lg flex items-start">
          <div>
            <h3 className="text-xl font-semibold flex items-center gap-x-3 border-b h-20">
              <div className="bg-orangeColor text-white p-3 rounded-lg">
                <FaShoppingCart size={22} />
              </div>
              E-commerce Solutions
            </h3>
            <p className="mt-2 text-lg w-[95%]">
              Empower your online store with robust and scalable e-commerce
              platforms. From product management to secure payment gateways, we
              create seamless shopping experiences that drive sales and customer
              satisfaction.
            </p>
          </div>
        </div>

        <div className="bg-blocks-color p-6 rounded-lg shadow-lg flex items-start">
          <div>
            <h3 className="text-xl font-semibold flex items-center gap-x-3 border-b h-20">
              <div className="bg-secondaryColor text-white p-3 rounded-lg">
                <FaPalette size={22} />
              </div>
              UI/UX Design and Development
            </h3>
            <p className="mt-2 text-lg w-[95%]">
              Enhance your user experience with stunning, intuitive designs. We
              craft responsive and user-friendly interfaces that engage and
              delight your audience, ensuring a seamless interaction across all
              devices.
            </p>
          </div>
        </div>

        <div className="bg-blocks-color p-6 rounded-lg shadow-lg flex items-start">
          <div>
            <h3 className="text-xl font-semibold flex items-center gap-x-3 border-b h-20">
              <div className="bg-primaryColor text-white p-3 rounded-lg">
                <FaSyncAlt size={22} />
              </div>
              Front-end and Back-end Integration
            </h3>
            <p className="mt-2 text-lg w-[95%]">
              Ensure smooth functionality and data flow between your front-end
              and back-end systems. Our expertise in API development and
              server-side logic guarantees that your applications perform
              efficiently and effectively.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <p className="text-lg font-semibold">Technologies We Use:</p>
        <p className="mt-2 text-lg w-[95%]">
          JavaScript, PHP, HTML, AJAX, jQuery, CSS, Tailwind CSS, React,
          Laravel, Shopify, Bootstrap
        </p>
      </div>
    </div>
  );
}
