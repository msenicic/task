import Header from "@/components/site/Header";
import PageHeader from "@/components/blocks/PageHeader";

const subHeaderData = [
  {
    title:
      "Investera i fastighetslån med hög avkastning - få 5-15% i förväntad årsränta*",
    checks: [
      "Lätt att komma igång",
      "Minsta investeringsbelopp 500 kr",
      "Ränta varje månad ",
    ],
    link: { text: "Öppna konto", href: "#" },
    tip: "*Historisk avkastning är ingen garanti för framtida avkastning. Varje investering är förknippad med en risk och du kan förlora hela eller delar av det investerade kapitalet.",
  },
];

export default function Content() {
  return (
    <>
      <Header color="light" />
      <div className="content position-relative flex-fill">
        <PageHeader
          image="/pageHeader3.png"
          title="Investera i fastighetslån med hög förväntad ränta"
          subtitle="Bygg din egen fastighetsportfölj och få ränta varje månad. Alla fastighetslån har säkerheter i form av pant i fastighet eller personlig borgen. För att börja investera i fastighetsprojekt behöver du bara skapa ett konto hos oss."
          subHeader={subHeaderData}
        />
        <div className="page-content"></div>
      </div>
    </>
  );
}
