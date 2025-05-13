import React, { useState } from "react";
import { projects } from "../projectData";
import { useParams } from "react-router-dom";
import Footer from "../../Footer";
import EventsNavbar from "../../events/EventsNavbar";
import { BadgeCheck, BadgeDollarSign, CalendarDays } from "lucide-react";
import ProjectApplication from "./ProjectApplication";

export default function ProjectDetail() {
  const params = useParams();
  const id = params.id;
  const project = projects.filter((project) => project.id === id)[0];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModal = () => {
    setIsModalOpen(true);
  };
  return (
    <div className="main-container w-full h-auto bg-[#011829] relative overflow-hidden">
      <div className="mb-8">
        <EventsNavbar />
      </div>
      <div className="grid place-items-center min-h-screen mb-20">
        <div className="inline-flex items-end gap-[50px]">
          <section className="inline-flex flex-col items-start gap-7 relative flex-[0_0_auto]">
            <img
              className="relative w-[480px] h-[480px] object-cover"
              alt="Img"
              src={"a11d2f0e855dbafd5b39Group2147256468P5002"}
            />

            <div className="flex flex-col items-start gap-[23px] relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex-col items-start flex-[0_0_auto] flex gap-3 relative self-stretch w-full">
                  <div className="relative self-stretch mt-[-1.00px] [font-family:'Space_Grotesk-Bold',Helvetica] font-bold text-white text-lg tracking-[0] leading-[normal]">
                    Powered by
                  </div>

                  <img
                    className="relative self-stretch w-full h-px mb-[-1.00px]"
                    alt="Line"
                    src={"line6"}
                  />
                </div>

                <div className="inline-flex items-center gap-3 relative flex-[0_0_auto]">
                  <img
                    className="relative w-[30px] h-[30px] object-cover"
                    alt="Img"
                    src={"image"}
                  />

                  <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
                    <div className="relative w-fit mt-[-1.00px] [font-family:'Space_Grotesk-Bold',Helvetica] font-bold text-white text-lg tracking-[0] leading-[normal]">
                      {project.creator}
                    </div>

                    <BadgeCheck className="fill-blue-600" />
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex-col items-start flex-[0_0_auto] flex gap-3 relative self-stretch w-full">
                  <div className="relative self-stretch mt-[-1.00px] [font-family:'Space_Grotesk-Bold',Helvetica] font-bold text-white text-lg tracking-[0] leading-[normal]">
                    Application
                  </div>

                  <img
                    className="relative self-stretch w-full h-px mb-[-1.00px]"
                    alt="Line"
                    src={"line7"}
                  />
                </div>

                <div className="flex flex-col w-[206px] items-start gap-3 relative flex-[0_0_auto]">
                  <div className="relative w-[115px] h-10">
                    <div className="relative h-10">
                      <img
                        className="absolute w-10 h-10 top-0 left-0 object-cover"
                        alt="Whatsapp image"
                        src={"whatsappImage20241119At2130386193B2702"}
                      />

                      <img
                        className="left-[25px] absolute w-10 h-10 top-0 object-cover"
                        alt="Whatsapp image"
                        src={"whatsappImage20241119At2130386193B2703"}
                      />

                      <img
                        className="left-[50px] absolute w-10 h-10 top-0 object-cover"
                        alt="Whatsapp image"
                        src={"whatsappImage20241119At2130386193B2704"}
                      />

                      <img
                        className="left-[75px] absolute w-10 h-10 top-0 object-cover"
                        alt="Whatsapp image"
                        src={"whatsappImage20241119At2130386193B2705"}
                      />
                    </div>
                  </div>

                  <div className="relative self-stretch [font-family:'Space_Grotesk-Medium',Helvetica] font-medium text-white text-lg tracking-[0] leading-[normal]">
                    User1234 and 92 others
                  </div>
                </div>
              </div>

              <div className="flex flex-col w-[154px] items-start gap-3 relative flex-[0_0_auto]">
                <div className="flex items-center justify-center gap-2.5 p-2.5 relative self-stretch w-full flex-[0_0_auto] rounded-[10px] border border-solid border-white">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Space_Grotesk-Medium',Helvetica] font-medium text-white text-base tracking-[0] leading-[normal]">
                    Contact the Host
                  </div>
                </div>

                <div className="inline-flex items-center justify-center gap-2.5 p-2.5 relative flex-[0_0_auto] rounded-[10px] border border-solid border-white">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Space_Grotesk-Medium',Helvetica] font-medium text-white text-base tracking-[0] leading-[normal]">
                    Report Project
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="flex flex-col w-[650.02px] items-start gap-[43px] relative">
            <div className="flex flex-col items-start gap-[43px] relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex flex-col w-[458px] items-start gap-[41px] relative flex-[0_0_auto]">
                <div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="self-stretch h-[38px] font-bold text-[44px] whitespace-nowrap relative mt-[-1.00px] text-white tracking-[0] leading-[normal]">
                    {project.title}
                  </div>

                  <div className="inline-flex h-5 items-center gap-3 relative">
                    <img
                      className="mt-[-5.00px] mb-[-5.00px] relative w-[30px] h-[30px] object-cover"
                      alt="Img"
                      src={"a11d2f0e855dbafd5b39Group2147256468P50022"}
                    />

                    <div className="inline-flex items-center gap-2 relative flex-[0_0_auto] mt-[-1.50px] mb-[-1.50px]">
                      <div className="w-fit [font-family:'Space_Grotesk-Regular',Helvetica] font-normal text-lg relative mt-[-1.00px] text-white tracking-[0] leading-[normal]">
                        {project.creator}
                      </div>

                      <BadgeCheck className="fill-blue-600" />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col w-[227px] items-start gap-4 relative flex-[0_0_auto]">
                  <div className="h-[15px] items-center flex gap-3 relative self-stretch w-full">
                    <div className="flex items-center justify-center gap-2.5 p-1 relative mt-[-4.50px] mb-[-4.50px] rounded-[5px]">
                      <CalendarDays className="fill-white" />
                    </div>

                    <p className="relative w-fit mt-[-5.00px] mb-[-3.00px] [font-family:'Space_Grotesk-Regular',Helvetica] font-normal text-white text-lg tracking-[0] leading-[normal]">
                      {project.date}
                    </p>
                  </div>

                  <div className="h-[15px] items-center flex gap-3 relative self-stretch w-full">
                    <div className="flex items-center justify-center gap-2.5 p-1 relative mt-[-4.50px] mb-[-4.50px] rounded-[5px]">
                      <BadgeDollarSign className="fill-white" />
                    </div>

                    <div className="relative w-fit mt-[-5.00px] mb-[-3.00px] [font-family:'Space_Grotesk-Regular',Helvetica] font-normal text-white text-lg tracking-[0] leading-[normal]">
                      {project.prize}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col h-32 items-start gap-2.5 p-[21px] relative self-stretch w-full bg-seaya-black rounded-[20px] border border-solid border-muted-foreground">
                <div className="flex flex-col w-[609px] items-start gap-3 relative flex-[0_0_auto] mb-[-6.00px] mr-[-0.98px]">
                  <div className="relative self-stretch mt-[-1.00px] [font-family:'Space_Grotesk-Bold',Helvetica] font-bold text-white text-base tracking-[0] leading-[normal]">
                    Registration
                  </div>

                  <button
                    className="flex h-[60px] items-center justify-center gap-2.5 p-2.5 relative self-stretch w-full bg-[#4DA2FF] rounded-[10px] text-white"
                    onClick={handleModal}
                  >
                    Apply Now!
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start gap-[3px] relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative self-stretch mt-[-1.00px] [font-family:'Space_Grotesk-Bold',Helvetica] font-bold text-white text-lg tracking-[0] leading-[normal]">
                About Event
              </div>

              <p className="relative self-stretch h-[403.62px] [font-family:'Space_Grotesk-Regular',Helvetica] font-normal text-white text-base tracking-[0] leading-[normal]">
                <span className="[font-family:'Space_Grotesk-Regular',Helvetica] font-normal text-white text-base tracking-[0]">
                  Join the Sentz team, for a relaxed evening of networking,
                  meaningful conversations, and an inside look at the Sentz app
                  and the future of fintech and cross-border payments.
                  <br />
                  <br />
                </span>

                <span className="[font-family:'Space_Grotesk-Bold',Helvetica] font-bold text-lg">
                  Criteria
                  <br />
                </span>

                <span className="[font-family:'Space_Grotesk-Regular',Helvetica] font-normal text-white text-base tracking-[0]">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Aperiam, numquam harum. Accusamus quos repellendus et quo
                  atque natus consequatur cum fugit sit voluptatem aliquid
                  obcaecati nulla qui exercitationem doloremque, voluptate minus
                  aperiam architecto laudantium saepe impedit hic distinctio.
                  Velit reiciendis consectetur illum minus consequuntur quisquam
                  obcaecati ad esse unde natus! Delectus, veritatis culpa
                  ratione fugiat incidunt quidem repudiandae, rem quia odio
                  cumque cupiditate, necessitatibus sit optio. Molestias
                  praesentium illo hic natus, ex quam sequi libero voluptas
                  magnam officia, soluta provident enim eaque sunt labore quidem
                  numquam quas fugit. Eaque perspiciatis ea ducimus, molestias
                  dolorem ex dolores temporibus debitis possimus corrupti.
                  <br />
                  <br />
                </span>

                <span className="[font-family:'Space_Grotesk-Bold',Helvetica] font-bold text-lg">
                  Payment
                  <br />
                </span>

                <span className="[font-family:'Space_Grotesk-Regular',Helvetica] font-normal text-white text-base tracking-[0]">
                  Participants who are selected will receive 10,000 USDC as
                  compensation.
                </span>
              </p>
            </div>
          </section>
        </div>

        {/* Project Application Modal */}
        {isModalOpen && (
          <ProjectApplication
            projectId={project.id}
            onClose={() => setIsModalOpen(false)}
          />
        )}
      </div>
      <Footer />
    </div>
  );
}
