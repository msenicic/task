import CtaBlocks from "./child/CtaBlocks";

export default function PageHeader({image, title, subtitle, subHeader}) {
    return (
        <section className="pageHeader">
            <div className="position-relative d-flex align-items-center justify-content-center text-light" style={{ paddingBlock: "150px", minHeight: "665px", background: `url("${image}") center / cover no-repeat` }}>
                <div className="position-absolute top-0 w-100 bg-gradient" style={{ height: "90%","--bs-gradient": "linear-gradient(180deg, rgba(0,0,0,0.57), rgba(0,0,0,0)" }} />
                <div className="container-fixed z-1">
                    <div className="w-100 d-flex flex-column align-items-center text-center">
                        <h1 className="display-5" style={{ whiteSpace: "pre-line", maxWidth: "1090px" }}>{title}</h1>
                        <p style={{ maxWidth: "750px" }}>{subtitle}</p>
                    </div>
                </div>
            </div>
            {subHeader?.length && (
                <div className="container-fixed position-relative z-2 pb-4" style={{ marginTop: "-170px" }}>
                    <CtaBlocks blocks={subHeader} />
                </div>
            )}
        </section>
    );
}