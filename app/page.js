import { CUSTOMER_STORIES, NEWS } from "@/data/posts";
import Header from "@/components/site/Header";
import PageHeader from "@/components/blocks/PageHeader";
import Posts from "@/components/blocks/Posts";
import Cta from "@/components/blocks/Cta";
import ImageText from "@/components/blocks/ImageText";

const subHeaderData = [
  {
    title:
      "Investera i ett lantbruksföretag nära dig - Genom gräsrotsfinansiering",
    checks: [
      "En investering som gör skillnad",
      "Stabil avkastning – oberoende av konjunktur",
      "Personligt, transparent, tryggt",
    ],
    link: { text: "Jag vill investera", href: "#" },
  },
  {
    title: "Är du i behov av lånefinansiering? – Gå till gräsrötterna",
    checks: [
      "Långsiktig partner till ditt företag",
      "Komplement till övrig finansiering",
      "Flexibla villkor och säkerheter",
    ],
    link: { text: "Jag vill låna", href: "#" },
  },
];

const ctaBlocksData = [
  {
    title:
      "Investera i ett lantbruksföretag nära dig - Genom gräsrotsfinansiering",
    checks: [
      "En investering som gör skillnad",
      "Stabil avkastning – oberoende av konjunktur",
      "Personligt, transparent, tryggt",
    ],
    link: { text: "Jag vill investera", href: "#" },
  },
  {
    title: "Är du i behov av lånefinansiering? – Gå till gräsrötterna",
    checks: [
      "Långsiktig partner till ditt företag",
      "Komplement till övrig finansiering",
      "Flexibla villkor och säkerheter",
    ],
    link: { text: "Jag vill låna", href: "#" },
  },
];

export default function Content() {
  return (
    <>
      <Header color="light" />
      <div className="content position-relative flex-fill">
        <PageHeader
          image="/pageHeader1.png"
          title={<>Finansiering av svenska lantbruksföretag – <br/>lån direkt från konsument till producent</>}
          subtitle="Finansiering av lån som får svensk livsmedelsproduktion att växa – från gräsrötterna"
          subHeader={subHeaderData}
        />
        <div className="page-content">
          <Posts title="Kundberättelser" posts={CUSTOMER_STORIES} />
          <Cta
            image="/ctaBlock.png"
            title="Finansiering av svenska lantbruksföretag – lån direkt från konsument till producent"
            subtitle="Finansiering av lån som får svensk livsmedelsproduktion att växa – från gräsrötterna"
            blocks={ctaBlocksData}
          />
          <Posts title="Nyheter" posts={NEWS} />
          <ImageText
            image="/loan-3.png"
            title="Våra lånevillkor"
            text="<p>Lantbruket är en kapitalintensiv bransch och det är inte alltid det egna kapitalet och banklån täcker hela investeringsbehovet.</p><br/><p>För att underlätta för lantbruksföretag att smidigt finansiera sina viktiga investeringar har vi på Gårdskapital därför utvecklat ett komplement till banklån.</p><p>Amorteringen skräddarsys för att passa just ditt företags kassaflöden. Räntan är rörlig och sätts individuellt efter en riskbedömning av vår erfarna kreditkommitté.</p>"
            link={{ text: "Läs mer om våra lånevillkor", href: "#" }}
          />
        </div>
      </div>
    </>
  );
}
