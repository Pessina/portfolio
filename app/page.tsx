"use client";
import { useTranslation } from "react-i18next";

const Page = () => {
  const { t } = useTranslation("");

  return (
    <div className="flex h-screen">
      <div className="w-1/3 p-10 bg-gray-200">
        <h1 className="text-2xl font-bold">{t("name")}</h1>
        <ul className="space-y-2 mt-4">
          <li>{t("name")}</li>
          <li>{t("name")}</li>
          <li>{t("name")}</li>
        </ul>
      </div>
      <div className="w-2/3 p-10">{/* Content goes here */}</div>
    </div>
  );
};

export default Page;
