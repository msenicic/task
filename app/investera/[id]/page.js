import Image from "next/image";
import Link from "next/link";
import { isExpired, interestDisplay, numberDisplay } from "@/utils/format";
import Countdown from "@/utils/components/Countdown";
import { redirect } from "next/navigation";

const fetchLoan = async (id) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/loans/${id}`);
  if (!res.ok) {
    redirect("/");
  }
  
  const loan = await res.json();
  return loan;
}

export async function generateMetadata({params}) {
  const { id } = await params;
  const loan = await fetchLoan(id);
  return {title: loan.title}
}

export default async function Content({params}) {
  const { id } = await params;
  const loan = await fetchLoan(id);

  return (
    <section>
      <div className="container-fixed">
        <div className="row position-relative gap-3 gap-md-0">
          <div className="col-md-8">
            <h1 className="mb-4">{loan.title}</h1>
            <div id="slider" className="carousel slide carousel-fade w-100" data-bs-ride="carousel">
              <div className="carousel-inner rounded-4" style={{ height: "585px" }}>
                <Link href="#" className="btn btn-success d-flex align-items-center gap-2 position-absolute z-2">
                  <svg width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.9553 11L10.2701 10.3281L14.2997 6.46875H1V5.53125H14.2997L10.2701 1.67188L10.9553 1L16.1758 6L10.9553 11Z" fill="currentColor" stroke="currentColor"/>
                  </svg>
                  <small>Öppna konto</small>
                </Link>
                {loan.images.map((item, i) => (
                  <div key={i} className={`carousel-item h-100 ${i === 0 ? "active" : ""}`}>
                    <Image 
                      src={item} 
                      className="object-fit-cover" 
                      alt="Featured Image"  
                      fill  
                      sizes="(max-width: 768px) 100vw, 50vw" 
                    />
                  </div>
                ))}
              </div>
              <div className="d-flex justify-content-between mt-3">
                <div className="d-flex flex-wrap align-items-center gap-2">
                  <p className="text-secondary m-0 lead">{`${Math.round(loan.interest * 100)}% årsränta | Riskbetyg ${loan.rating}`}</p>
                  {loan.fully_subscribed && <span className="text-bg-primary py-1 ps-2 pe-3" style={{ clipPath: "polygon(50% 0%, 100% 0, 95% 50%, 100% 100%, 0 100%, 0 50%, 0 0)" }}>Garanterat fulltecknat lån</span>}
                </div>
                <div className="carousel-indicators position-relative m-0">
                  {loan.images.map((_, i) => (
                    <button key={i} type="button" data-bs-target="#slider" data-bs-slide-to={i} className={`rounded-5 ${i === 0 ? "active" : ""}`} aria-current={i === 0 ? "true" : null} aria-label={`Slide ${i+1}`}></button>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-5" dangerouslySetInnerHTML={{ __html: loan.text }}/>
          </div>
          <div className="col-md-4">
            <div className="pb-4 mb-4 border-bottom border-3">
              <div className="mb-3">
                <p className="mb-1 lead">Lånebelopp</p>
                <p className="m-0 h1 lh-1 text-uppercase fw-medium">{numberDisplay(loan.amount)} sek</p>
              </div>
              <div className="mb-4">
                  <p className="mb-1 lead">Tecknat</p>
                  <div className="progress rounded-4 h-auto fw-medium" role="progressbar" aria-valuenow={`${loan.percentage}`} aria-valuemin="0" aria-valuemax="100" style={{ backgroundColor: "#D0D0D0", fontSize: ".875em" }}>
                      <div className="progress-bar bg-primary rounded-4 align-items-end justify-content-center pe-2 overflow-visible" style={{ width: `${loan.percentage}%` }}>{`${loan.percentage}%`}</div>
                  </div>
              </div>
              <div className="mb-4 d-flex justify-content-between align-items-center">
                <p className="m-0 lead">Riskbetyg</p>    
                <p className="m-0 lh-1 px-3 py-2 rounded-2 text-bg-primary fw-medium fs-4">{loan.rating}</p>
              </div>
              <div className="mb-4 d-flex justify-content-between">
                <p className="m-0 lead">Tid kvar</p>
                <Countdown expirationDate={loan.expiration_date}/>
              </div>
              <div className="mb-5 d-flex justify-content-between align-items-center">
                <p className="m-0 lead">Löptid</p>
                <p className="m-0 h3 lh-1">{loan.term} månader</p>
              </div>
              <div className="mb-5 d-flex justify-content-between align-items-center">
                <p className="m-0 lead">Antal köporder</p>
                <p className="m-0 h3 lh-1">{loan.purchase_orders}</p>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <p className="m-0 lead">Årsränta</p>
                <p className="m-0 h3 lh-1">{interestDisplay(loan.interest)}</p>
              </div>
            </div>
            <div className="d-flex flex-column align-items-center gap-4">
              <Link href="#" className={`btn btn-secondary d-flex align-items-center gap-2 fs-4 ${isExpired(loan.expiration_date) && "disabled"}`}>
                <i className="bi bi-arrow-right"></i>
                Investera
              </Link>
              <p className="m-0">För att kunna investera behöver du öppna ett konto hos Gårdskapital. Är du redan registrerad? <Link className="text-decoration-underline" style={{ color: "currentcolor" }} href="#">Logga in här.</Link></p>
              <div className="d-flex gap-3">
                <Link href="#" className="text-primary fs-2">
                  <i className="bi bi-share-fill"></i>
                </Link>
                <Link href="#" className="text-primary fs-2">
                  <i className="bi bi-facebook"></i>
                </Link>
                <Link href="#" className="text-primary fs-2">
                  <i className="bi bi-twitter"></i>
                </Link>
                <Link href="#" className="text-primary fs-2">
                  <i className="bi bi-linkedin"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}