import React from "react";

import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";

interface InputType {
  name: string;
  classNames?: string;
  labelText: string;
  type?: "text" | "number";
  placeHolder?: string;
  isTextArea?: false | true;
  rows?: 2 | 3 | 4 | 5;
  labelClassNames?: string;
  LabelSvg?: any;
  onChange?: () => void;
  value?: string;
}

export default function InputField({
  classNames,
  labelText,
  type = "text",
  placeHolder,
  isTextArea = false,
  rows = 2,
  name,
  labelClassNames = "",
  LabelSvg,
  value,
}: InputType) {
  return (
    <div className={`w-full ${classNames || ""}`}>
      <label
        htmlFor={labelText}
        className={`flex block mb-2 text-sm font-medium text-gray-900 dark:text-white text-sm  ${labelClassNames}`}
      >
        {labelText}
        {LabelSvg && <LabelSvg className="ml-2 w-5 text-slate-500" />}
      </label>
      {!isTextArea ? (
        <input
          name={name}
          type={type}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder={placeHolder}
          value={value}
          required
        />
      ) : (
        <textarea
          name={name}
          rows={rows}
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder={placeHolder}
          value={value}
        ></textarea>
      )}
    </div>
  );
}
