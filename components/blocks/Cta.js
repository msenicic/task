import CtaBlocks from "./child/CtaBlocks";

export default function Cta({image, title, subtitle, blocks}) {
    return(
        <section className="py-5" style={{ background: `url("${image}") center / cover no-repeat` }}>
            <div className="container-fixed">
                <div className="text-center text-light mb-5">
                    <h2 className="mx-auto" style={{ maxWidth: "800px" }}>{title}</h2>
                    <p className="mx-auto" style={{ maxWidth: "1040px" }}>{subtitle}</p>
                </div>
                <CtaBlocks blocks={blocks} />
            </div>
        </section>
    )
}