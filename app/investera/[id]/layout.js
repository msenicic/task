import Header from "@/components/site/Header";
import Loans from "@/components/blocks/Loans";

export default function LoanLayout({ children }) {
  return (
    <>
      <Header color="dark" />
      <div className="content position-relative flex-fill">
        <div className="page-content" style={{ marginTop: "140px" }}>
          {children}
          <Loans fullList={false} />
        </div>
      </div>
    </>
  );
}