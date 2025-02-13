import { getTranslations } from "next-intl/server";
export default async function NotFoundPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  const t = await getTranslations({ locale, namespace: "NotFoundPage" });

  return (
    <div className="pageContainer mt-40 flex h-full items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <h1>{t("title")}</h1>
        <p>{t("description")}</p>
      </div>
    </div>
  );
}
