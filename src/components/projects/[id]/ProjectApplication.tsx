import React, { useState } from "react";
import { FileText, MapPin } from "lucide-react";
import { toast, Toaster } from "sonner";

interface ProjectDetailProps {
  projectId: string;
  onClose: () => void;
}

interface FormData {
  projectId: string;
  location: string;
  description: string;
  additionalInformation?: string;
}

export default function ProjectApplication({
  projectId,
  onClose,
}: ProjectDetailProps) {
  const [formData, setFormData] = useState<FormData>({
    projectId: "",
    location: "",
    description: "",
    additionalInformation: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };

  const handleSubmit = () => {
    setFormData({ ...formData, [projectId]: projectId });
    console.log(formData);
    toast.success("Application has been submitted");
  };

  return (
    <div className="flex justify-center fixed inset-0 z-50 items-center">
      <div className="bg-white w-[720px] h-[722px] flex justify-center">
        <div className="flex flex-col w-[646px] items-start gap-6 relative top-[20px] rounded-lg">
          <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative w-fit mt-[-0.92px] [font-family:'Space_Grotesk-Bold',Helvetica] font-bold text-seaya-black text-[23px] tracking-[0] leading-[normal]">
              Submit Your Application
            </div>

            <button
              onClick={onClose}
              className="text-black text-[1.5rem] hover:text-gray-300"
            >
              ×
            </button>
          </div>

          <div className="flex flex-col h-[535.16px] items-start gap-2.5 px-3 py-[17px] relative self-stretch w-full rounded-[10px] border border-solid border-stroke-gray">
            <div className="flex flex-col w-[621.5px] items-center gap-[34px] relative flex-[0_0_auto]">
              <p className="relative w-[608.92px] h-[91px] mt-[-1.00px] [font-family:'Space_Grotesk-Regular',Helvetica] font-normal text-seaya-black text-lg tracking-[0] leading-[normal]">
                Don&#39;t start working just yet! Apply first, and then begin
                working only once you&#39;ve been hired for the project by the
                sponsor.
                <br />
                Please note that the sponsor might contact you to assess fit
                before picking the winner.
              </p>

              <div className="flex flex-col items-start gap-[19px] relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex h-[169px] items-start gap-2.5 px-3.5 py-[19px] relative self-stretch w-full rounded-[10px] border border-solid border-stroke-gray">
                  <span className="top-1/2 transform ">
                    <FileText className="text-muted-foreground" />
                  </span>
                  <input
                    type="text"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Proposal Description"
                    className="w-full text-muted-foreground top-0 left-0"
                  />
                </div>

                <div className="flex flex-col h-[63px] items-center gap-2.5 px-3.5 py-[19px] relative self-stretch w-full rounded-[10px] border border-solid border-stroke-gray">
                  <span className="absolute left-1 top-1/2 transform -translate-y-1/2">
                    <MapPin className="text-muted-foreground mx-1" />
                  </span>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="Add location"
                    className="w-full pl-8 text-muted-foreground top-0 left-0"
                  />
                </div>

                <div className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="relative self-stretch mt-[-1.00px] [font-family:'Space_Grotesk-SemiBold',Helvetica] font-semibold text-seaya-black text-lg tracking-[0] leading-[normal]">
                    Additional Information:
                  </div>

                  <div className="flex flex-col h-[62.75px] items-start gap-2.5 px-[18px] py-[19px] relative self-stretch w-full rounded-[10px] border border-solid border-stroke-gray">
                    <span className="absolute left-1 top-1/2 transform -translate-y-1/2">
                      <FileText className="text-muted-foreground mx-1" />
                    </span>
                    <input
                      type="text"
                      name="additionalInformation"
                      value={formData.additionalInformation}
                      onChange={handleChange}
                      placeholder="More Infomations"
                      className="w-full pl-8 text-muted-foreground top-0 left-0"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col h-[63px] items-center justify-center gap-2.5 py-[19px] relative self-stretch w-full bg-primary-color rounded-[10px]">
            <div className="inline-flex items-start gap-3 relative flex-[0_0_auto] w-full">
              <button
                className="flex h-[60px] items-center justify-center gap-2.5 p-2.5 relative self-stretch w-full bg-[#4DA2FF] rounded-[10px] text-white"
                onClick={handleSubmit}
              >
                Apply!
              </button>
            </div>
          </div>
        </div>
      </div>
      <Toaster richColors />
    </div>
  );
}
