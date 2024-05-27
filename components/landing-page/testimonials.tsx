import React from "react";
import Image from "next/image";

const Testimonials = () => {
  return (
    <div>
      <section className=" body-font bg-secondary font-medium md:m-0 lg:m-16 mt-0 lg:rounded-3xl md:rounded-none authBlogCard lg:px-4">
        <h1 className="text-center text-4xl pt-14 text-primary">
          TESTIMONIALS
        </h1>
        <div className="container px-5 py-16 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <Image
                  width={100}
                  height={100}
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="/person4.jpeg"
                />
                <p className="leading-relaxed font-medium">
                  Breedit has become my go-to brand for all things pet-related!
                  With a menagerie of animals at home, including dogs, cats, and
                  even a few rabbits, finding a brand that caters to all their
                  needs is no easy task.
                </p>
                <span className="inline-block h-1 w-10 rounded bg-primary mt-6 mb-4"></span>
                <h2 className=" font-semibold title-font tracking-wider text-sm pb-1">
                  Nimya Smith
                </h2>
                <p className="font-semibold">Pet enthu</p>
              </div>
            </div>
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <Image
                  height={100}
                  width={100}
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="/person1.jpeg"
                />
                <p className="leading-relaxed font-medium">
                  Breedit has become my go-to brand for all things pet-related!
                  With a menagerie of animals at home, including dogs, cats, and
                  even a few rabbits, finding a brand that caters to all their
                  needs is no easy task.
                </p>
                <span className="inline-block h-1 w-10 rounded bg-primary mt-6 mb-4"></span>
                <h2 className="  title-font tracking-wider text-sm font-semibold pb-1">
                  ALPER KAMU
                </h2>
                <p className=" font-semibold">Dog Lover</p>
              </div>
            </div>
            <div className="lg:w-1/3 lg:mb-0 p-4">
              <div className="h-full text-center">
                <Image
                  height={100}
                  width={100}
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="/person3.jpeg"
                />
                <p className="leading-relaxed font-medium">
                  Breedit has become my go-to brand for all things pet-related!
                  With a menagerie of animals at home, including dogs, cats, and
                  even a few rabbits, finding a brand that caters to all their
                  needs is no easy task.
                </p>
                <span className="inline-block h-1 w-10 rounded bg-primary mt-6 mb-4"></span>
                <h2 className=" title-font tracking-wider text-sm font-semibold pb-1">
                  HENRY LETHAM
                </h2>
                <p className=" font-semibold">Animal Activist</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
