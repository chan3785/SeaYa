import React, { useEffect, useState } from "react";
import EventsNavbar from "../events/EventsNavbar";
import DatePicker from "../create-event/DatePicker";
import useDate, { useTime } from "../../context/useDate";
import TimePicker from "../create-event/TimePicker";
import TimeZonePicker from "../create-event/TimezonePicker";
import {
  FileText,
  MapPin,
  Palette,
  Tag,
  Tickets,
  UserRound,
} from "lucide-react";
import Footer from "../Footer";
import { useSignAndExecuteTransaction } from "@mysten/dapp-kit";
import { toast } from "sonner";
import { bcs } from "@mysten/sui/bcs";
import { TESTNET_COUNTER_PACKAGE_ID } from "../../constants";
import { Transaction } from "@mysten/sui/transactions";

interface FormData {
  projectName: string;
  startDate: string;
  endDate: string;
  startTime: string;
  endTime: string;
  timeZone: string;
  location: string;
  category: string;
  description: string;
  ticketsOption?: string;
  eventImage?: File | null;
}

export default function CreateProjects() {
  const { mutate: signAndExecute } = useSignAndExecuteTransaction();

  const [formData, setFormData] = useState<FormData>({
    projectName: "",
    startDate: "",
    endDate: "",
    startTime: "",
    endTime: "",
    timeZone: "",
    location: "",
    category: "",
    description: "",
    ticketsOption: "",
    eventImage: null,
  });
  const [previewUrl, setPreviewUrl] = useState<string>("");
  const [timezone, setTimezone] = useState<string>(""); // 사용자가 선택한 값이 바로 바로 적용이 안됨. 이걸 고쳐야 된다.
  const { dateValue } = useDate();
  const { timeValue } = useTime();

  useEffect(() => {
    if (dateValue && timeValue && timezone) {
      setFormData({
        ...formData,
        startTime: timeValue?.from ? timeValue.from?.toString() : "",
        endTime: timeValue?.to ? timeValue.to?.toString() : "",
        startDate: dateValue?.from ? dateValue.from?.toString() : "",
        endDate: dateValue?.to ? dateValue.to?.toString() : "",
        timeZone: timezone,
      });
    }
  }, [dateValue, timeValue, timezone]);

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
    const tx = new Transaction();
    tx.moveCall({
      target: `${TESTNET_COUNTER_PACKAGE_ID}::seaya_v2::create_event`,
      arguments: [
        bcs.Address.serialize(
          "0xea0687aae8cb999f6fd96fed318228e499f213c1d943a81a6e2c7a31ebb4683b"
        ),
        bcs.String.serialize(formData.projectName),
        bcs.String.serialize(formData.description),
        bcs.String.serialize(formData.location),
      ],
    });
    signAndExecute(
      {
        transaction: tx, // Transaction 객체
      },
      {
        onSuccess: (result) => {
          toast.success(
            `Application has been submitted, Thank you for attending! TxHash:${result.digest}`
          );
        },
        onError: (err) => {
          console.log(err);
        },
      }
    );
    console.log(formData);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData({ ...formData, eventImage: file });
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="main-container w-full h-auto bg-[#011829] relative overflow-hidden">
      <div className="mb-8">
        <EventsNavbar />
      </div>
      <section className="flex min-h-screen">
        <div className="w-full pt-[2rem] pb-[4rem] pl-4 sm:pl-8 md:pl-16 lg:pl-24">
          <div className="mb-6">
            <input
              type="text"
              name="eventName"
              value={formData.projectName}
              onChange={handleChange}
              placeholder="Enter Project Name"
              className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] font-semibold text-white font-['Space_Grotesk'] bg-transparent"
            />
          </div>
          <div className="space-y-4 w-[845px]">
            <div className="relative flex gap-4">
              <DatePicker className="text-white" />
              <TimePicker />
              <TimeZonePicker setTimezone={setTimezone} />
            </div>
            <div className="relative">
              <span className="absolute left-1 top-1/2 transform -translate-y-1/2">
                <MapPin className="text-muted-foreground mx-1" />
              </span>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Add location"
                className="w-full p-2 pl-8 bg-gray-700 text-muted-foreground top-0 left-0 bg-seaya-black rounded-[10px] border border-solid border-stroke-gray"
              />
            </div>
            <div className="relative flex items-center border border-muted-foreground rounded-[10px]">
              <span className="absolute left-1 top-1/2 transform -translate-y-1/2">
                <Tag className="text-muted-foreground mx-1" />
              </span>
              <select
                name="category"
                className="p-2 rounded bg-gray-700 text-muted-foreground w-[810px] bg-transparent flex items-end ml-6"
                onChange={handleChange}
              >
                <option value="">Select Category</option>
                <option value="hackathon">Hackathon</option>
                <option value="development">Development</option>
                <option value="games">Games</option>
                <option value="others">Others</option>
              </select>
            </div>
            <div className="relative flex items-center">
              <span className="absolute left-1 top-1/2 transform -translate-y-1/2">
                <FileText className="text-muted-foreground mx-1" />
              </span>
              <input
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Event Description"
                className="w-full p-2 pl-8 bg-gray-700 text-muted-foreground top-0 left-0 bg-seaya-black rounded-[10px] border border-solid border-stroke-gray"
              />
            </div>
            <div>
              <div className="text-gray-300">More option :</div>
              <div className="mt-2">
                <div className="relative">
                  <span className="absolute left-1 top-1/2 transform -translate-y-1/2">
                    <Tickets className="text-muted-foreground mx-1" />
                  </span>
                  <input
                    type="text"
                    name="ticketsOption"
                    value={formData.ticketsOption}
                    onChange={handleChange}
                    placeholder="Tickets option"
                    className="w-full p-2 pl-8 bg-gray-700 text-muted-foreground top-0 left-0 bg-seaya-black rounded-[10px] border border-solid border-stroke-gray"
                  />
                </div>
              </div>
            </div>
            <button
              onClick={handleSubmit}
              className="w-full p-2 bg-[#4DA2FF] rounded text-white"
            >
              Create Event
            </button>
          </div>
        </div>
        <div className="md:w-1/2 px-4 pt-10">
          <div
            className="w-full aspect-square bg-seaya-black border-2 border-dashed border-muted-foreground rounded-lg flex items-center justify-center cursor-pointer hover:border-[#4DA2FF] transition-colors"
            onClick={() => document.getElementById("imageUpload")?.click()}
          >
            {previewUrl ? (
              <img
                src={previewUrl}
                alt="Event preview"
                className="w-full h-full object-cover rounded-lg"
              />
            ) : (
              <div className="text-center text-gray-400">
                <p>Click to upload image</p>
              </div>
            )}
            <input
              id="imageUpload"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
