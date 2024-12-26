import Header from "@/components/site/Header";
import PageHeader from "@/components/blocks/PageHeader";
import Loans from "@/components/blocks/Loans";

export default function Content() {
  return (
    <>
      <Header color="light" />
      <div className="content position-relative flex-fill">
        <PageHeader
          image="/pageHeader2.png"
          title="Investera i ett lantbruksföretag nära dig - Genom gräsrotsfinansiering"
          subtitle="Finansiering av lån som får svensk livsmedelsproduktion att växa – från gräsrötterna"
        />
        <div className="page-content">
          <Loans fullList={true} />
        </div>
      </div>
    </>
  );
}