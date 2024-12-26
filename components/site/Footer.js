import Logo from "@/components/Logo";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="text-light pb-4 small" style={{ backgroundColor: "#012723", paddingTop: "90px" }}>
      <div className="container-fixed">
        <div className="row m-0 flex-column flex-md-row border-bottom align-items-center align-items-md-start justify-content-between text-center text-md-start gap-5 gap-md-0">
          <div className="d-flex flex-column gap-4 col-md-3 p-0">
            <Link style={{ color: "currentColor" }} href="/">
              <Logo />
            </Link>
            <p style={{ color: "#CBD9E1", fontSize: "0.7rem" }}>Gårdskapital Lantbruksfinansiering AB är registrerad som AIF-förvaltare hos Finansinspektionen.</p>
          </div>
          <div className="col-md-8 p-0 row">
            <div className="col-12 col-md-6 col-lg-3 mb-5">
              <p className="fw-medium mb-3" style={{ color: "#CBD9E1" }}>Lånesyfte</p>
              <ul className="nav nav-underline flex-column align-items-center align-items-md-start gap-3">
                <li className="nav-item"><Link href="#" className="nav-link p-0 text-light">Finansiering vid investering</Link></li>
                <li className="nav-item"><Link href="#" className="nav-link p-0 text-light">Medfinansiering fastighet</Link></li>
                <li className="nav-item"><Link href="#" className="nav-link p-0 text-light">Omställningslån</Link></li>
                <li className="nav-item"><Link href="#" className="nav-link p-0 text-light">Rörelsekapital</Link></li>
                <li className="nav-item"><Link href="#" className="nav-link p-0 text-light">Bryggfinansiering vid stöd</Link></li>
                <li className="nav-item"><Link href="#" className="nav-link p-0 text-light">Aktuella lån</Link></li>
              </ul>
            </div>
            <div className="col-12 col-md-6 col-lg-3 mb-5">
              <p className="fw-medium mb-3" style={{ color: "#CBD9E1" }}>Villkor</p>
              <ul className="nav nav-underline flex-column align-items-center align-items-md-start gap-3">
                <li className="nav-item"><Link href="#" className="nav-link p-0 text-light">Intresseanmälan</Link></li>
                <li className="nav-item"><Link href="#" className="nav-link p-0 text-light">Lånevillkor</Link></li>
                <li className="nav-item"><Link href="#" className="nav-link p-0 text-light">Cookies</Link></li>
                <li className="nav-item"><Link href="#" className="nav-link p-0 text-light">Integritetspolicy</Link></li>
              </ul>
            </div>
            <div className="col-12 col-md-6 col-lg-3 mb-5">
              <p className="fw-medium mb-3" style={{ color: "#CBD9E1" }}>Om oss</p>
              <ul className="nav nav-underline flex-column align-items-center align-items-md-start gap-3">
                <li className="nav-item"><Link href="#" className="nav-link p-0 text-light">Om oss</Link></li>
                <li className="nav-item"><Link href="#" className="nav-link p-0 text-light">Frågor och svar</Link></li>
                <li className="nav-item"><Link href="#" className="nav-link p-0 text-light">Kontakt</Link></li>
              </ul>
            </div>
            <div className="col-12 col-md-6 col-lg-3 mb-5">
              <p className="fw-medium mb-3" style={{ color: "#CBD9E1" }}>Följ oss</p>
              <ul className="nav nav-underline flex-column align-items-center align-items-md-start gap-3">
                <li className="nav-item"><Link href="#" className="nav-link p-0 text-light">Facebook</Link></li>
                <li className="nav-item"><Link href="#" className="nav-link p-0 text-light">Instagram</Link></li>
                <li className="nav-item"><Link href="#" className="nav-link p-0 text-light">Linkedin</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row pt-3 gap-4 gap-md-0" style={{ color: "#CBD9E1" }}>
          <div className="col-12 col-md-6 lh-1">
            <p>Copyright - Gårdskapital Lantbruksfinansiering AB</p>
          </div>
          <div className="col-12 col-md-6 lh-1">
            <p><span className="fw-medium">Risker</span> - Historisk avkastning är ingen garanti för framtida avkastning. Varje investering är förknippad med en risk och du kan förlora hela eller delar av det investerade kapitalet. <Link className="text-decoration-underline" style={{ color: "currentcolor" }} href="#">Läs om risk</Link></p>
          </div>
        </div>
      </div>
    </footer>
  );
}
