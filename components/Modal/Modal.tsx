import React, { useState } from "react";
import InputField from "../Input/Input";
import styles from "./Modal.module.css";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";
import { PlusIcon } from "@heroicons/react/24/outline";
import { Dispatch, SetStateAction } from "react";

interface ScrapeInterface {
  name: string;
  feedUrl: string;
  scrapeInterval: string;
  description: string;
  email: string;
  discordUrl: string;
  slackUrl: string;
}

interface ModalPropsInterface {
  isOpen?: Boolean;
  onClose: Dispatch<SetStateAction<boolean>>;
}

export default function Modal({
  isOpen = false,
  onClose,
}: ModalPropsInterface) {
  const [scrapeData, setScrapeData] = useState<ScrapeInterface>({
    name: "",
    feedUrl: "",
    scrapeInterval: "0",
    description: "",
    email: "",
    discordUrl: "",
    slackUrl: "",
  });

  return (
    <>
      <div
        className={` ${
          !isOpen ? "hidden" : ""
        } modal justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none `}
      >
        <div className="relative w-auto my-6 mt-32 mx-auto max-w-lg">
          <form>
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              <div className="flex flex-col items-start p-4 border-solid rounded-t">
                <h3 className="font-semibold text-xl">Create a new scrape</h3>
                <p className="text-xs text-slate-500">
                  Lorem ipsum dolor sit amet consectetur. Ut sit vel fames
                  egestas integer. Purus ipsum amet scelerisque commodo dui ut.{" "}
                </p>
              </div>

              <div className="flex flex-col items-start px-4 py-2 border-solid rounded-t">
                <InputField
                  labelText="Name"
                  placeHolder="Enter a name"
                  name="name"
                />
              </div>

              <div className="flex flex-col items-start px-4 py-2 border-solid rounded-t">
                <InputField
                  labelText="Upwork RSS feed URL"
                  placeHolder="Enter a URL"
                  name="upworkUrl"
                  LabelSvg={QuestionMarkCircleIcon}
                />
              </div>

              <div className="flex flex-col items-start px-4 py-2 border-solid rounded-t">
                <label
                  htmlFor={"Scrape Interval"}
                  className="flex block mb-2 text-sm font-medium text-gray-900 dark:text-white text-sm"
                >
                  Scrape Interval
                  <QuestionMarkCircleIcon className="ml-2 w-5 text-slate-500" />
                </label>
                <input
                  id="medium-range"
                  type="range"
                  min="0"
                  max="100"
                  value={scrapeData.scrapeInterval}
                  className="w-full h-2 mt-2 mb-4 bg-gray-200 rounded-lg  cursor-pointer range-lg"
                />
                <div className="w-full flex justify-between	">
                  <span
                    className="cursor-progress text-xs text-slate-500"
                    onClick={() =>
                      setScrapeData({
                        ...scrapeData,
                        scrapeInterval: "0",
                      })
                    }
                  >
                    5 minutes
                  </span>
                  <span
                    className="cursor-progress text-xs text-slate-500"
                    onClick={() =>
                      setScrapeData({
                        ...scrapeData,
                        scrapeInterval: "50",
                      })
                    }
                  >
                    15 minutes
                  </span>
                  <span
                    className="cursor-progress text-xs text-slate-500"
                    onClick={() =>
                      setScrapeData({
                        ...scrapeData,
                        scrapeInterval: "100",
                      })
                    }
                  >
                    30 minutes
                  </span>
                </div>
              </div>

              <div className="flex flex-col items-start px-4 py-2 border-solid rounded-t">
                <h6 className="text-lg font-bold dark:text-white">Notify</h6>
                <p className="mb-3 text-xs text-slate-500">
                  Whenever a new job has been found, add the channels you wish
                  the notifications to me emitted too
                </p>
              </div>

              <div className="flex items-start px-4 py-2 border-solid rounded-t">
                <input
                  id="checked-checkbox"
                  type="checkbox"
                  className="w-5 h-5 focus:outline-none text-blue-600 
                      bg-gray-100 border-gray-300 rounded focus:ring-blue-500
                       dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <InputField
                  labelText="Email"
                  placeHolder="andrew@upnotify.co"
                  name="email"
                  classNames={`${styles.light_input} ${styles.mode_input_left}`}
                  labelClassNames="mb-3.5 ml-1.5"
                />
              </div>

              <div className="flex items-start px-4 py-2 border-solid rounded-t">
                <input
                  checked={true}
                  id="checked-checkbox"
                  type="checkbox"
                  className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <InputField
                  labelText="Discord"
                  placeHolder="Enter Discord Webhook URL"
                  name="discord"
                  classNames={styles.mode_input_left}
                  labelClassNames="mb-3.5 ml-1.5"
                />
              </div>

              <div className="flex items-start px-4 py-2 border-solid rounded-t">
                <input
                  id="checked-checkbox"
                  type="checkbox"
                  className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <InputField
                  labelText="Slack"
                  placeHolder="Enter Slack Webhook URL"
                  name="slack"
                  classNames={styles.mode_input_left}
                  labelClassNames="mb-3.5 ml-1.5"
                />
              </div>

              <div className="flex items-start my-8 ">
                <button
                  type="button"
                  className="flex-1 border-2 border-inherit	font-medium px-5 py-2.5 text-center mb-2 mx-4 rounded-md text-base "
                  onClick={() => onClose(false)}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="flex-1 flex justify-center	text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium text-base px-5 py-2.5 text-center mb-2 mx-4 rounded-md text-base"
                >
                  <PlusIcon className="ml-2 mr-2 w-5" />
                  Create
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
