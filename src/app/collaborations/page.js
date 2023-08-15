import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <>
      <div className=" text-white">
        <div className="p-12 container mx-auto flex justify-center flex-col ">
          <h1 className="text-3xl md:text-4xl lg:text-5x">
            OFFICIAL COLLABORATORS
          </h1>
          <div className="mr-2 w-full rounded-sm bg-white h-1"></div>
        </div>
      </div>
      <div className="flex justify-center items-center min-h-screen mx-auto max-w-[1536px]">
        <div className="grid grid-cols-1 md:grid-cols-1 gap-4 ">
          <div className=" p-8 shadow-lg rounded-lg flex flex-col md:flex-row justify-center">
            <Image
            width={400}
            height={400}
              src="/images/collaborations/iit-bhubaneshwar.svg"
              alt="iit-bhubaneshwar"
              className="w-full md:w-1/3 mb-4 md:mb-0 md:order-first"
            />
            <div className="md:w-1/2 md:pl-6 flex flex-col justify-center ">
              <p className="text-white">
                We are thrilled to announce that the Robotics Society of IIT
                Bhubaneswar has been officially declared as the Workshop
                Collaborator for Udaan NITR. This collaboration opens up
                exciting opportunities for knowledge exchange and skill
                development between the two esteemed institutions. Together, we
                aim to foster innovation, creativity, and technological
                advancement in the field of robotics. We embark on this
                collaborative journey, providing students with the tools and
                expertise to shape the future of robotics.
              </p>
            </div>
          </div>

          <div className=" p-8 shadow-lg rounded-lg flex flex-col md:flex-row justify-center">
            <Image
            width={400}
            height={400}
              src={"/images/collaborations/inspire.svg"}
              alt="inspire"
              className="w-full md:w-1/3 mb-4 md:mb-0 md:order-last"
            />
            <div className="md:w-1/2 md:pl-6 flex flex-col justify-center">
              <p className="text-white">
                Udaan has officially partnered with Inspire club , a renowned
                source of inspiration. Together, they aim to encourage
                individuals to pursue their passions. Collaborating closely,
                Udaan and Inspire conduct research on modern aerospace and
                aviation topics. Currently, they are actively engaged in
                studying Chandrayaan-3, an important space exploration mission
                by ISRO. By pooling their expertise, Udaan and Inspire seek to
                contribute valuable insights to the field. Through their
                partnership, they aspire to inspire future generations and push
                the boundaries of scientific discovery. Udaan and Inspire are
                committed to empowering individuals and fostering a culture of
                exploration and passion.
              </p>
            </div>
          </div>

          <div className=" p-8 shadow-lg rounded-lg md:flex flex-col justify-center">
            <div className="flex flex-col md:flex-row items-end">
              <div className="md:w-1/3 mb-4 md:mb-0 md:pr-6">
                <Image
                width={400}
                height={400} src="/images/collaborations/webwiz.svg" alt="webwiz" className="w-full " />
              </div>

              <div className="md:w-1/2 md:pl-4  ">
                <p className="text-white">
                  Udaan has officially announced Webwiz as its official
                  collaboration partner. With this partnership, Webwiz is
                  entrusted with the crucial task of developing Udaan's official
                  website. Their expertise and experience will be instrumental
                  in creating a professional, user-friendly, and visually
                  appealing online platform for Udaan.
                </p>
              </div>
            </div>
            <p className="text-white md:p-8 w-full mx-auto">
              {" "}
              In addition to website development, Webwiz will also provide
              technical support, ensuring the smooth functioning of the website.
              They will be responsible for handling regular updates, ensuring
              that Udaan's website remains current and engaging for its users.
              Udaan is eager to forge a mutually beneficial relationship with
              Webwiz in the days ahead. Both parties are committed to leveraging
              each other's strengths, fostering innovation, and achieving
              success in their shared endeavors. With Webwiz's technical prowess
              and Udaan's vision, this partnership holds immense potential to
              elevate Udaan's online presence and create a seamless experience
              for its users. Together, they are poised to make a significant
              impact in their respective fields and build a strong and fruitful
              collaboration.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
