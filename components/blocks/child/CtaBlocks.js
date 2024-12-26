import Link from "next/link"

export default function CtaBlocks({blocks}) {
    return(
        <div className={`row row-cols-1 gx-0 gx-lg-4 gy-4 w-100 ${blocks.length > 1 ? "row-cols-lg-2": ""}`} style={{ maxWidth: "980px", justifySelf: "center" }}>
            {blocks.map((block, i, arr) => (
                <div key={i} className="col d-flex flex-column">
                    <div className="card bg-light p-4 flex-fill w-100 rounded-4 mx-auto" style={{ maxWidth: "750px" }}>
                        <div className={`card-body p-0 p-sm-3 d-flex flex-column mx-auto align-items-center ${arr.length > 1 ? "align-items-lg-start pe-lg-0": ""}`} style={{ maxWidth: "500px" }}>
                            <p className={`mb-4 text-center ${arr.length > 1 ? "text-lg-start": ""}`} style={{ fontSize: "1.3rem" }}>{block.title}</p>
                            <div className="mb-3">
                                {block.checks.map((text, i) => (
                                    <div key={i} className="d-flex gap-3 mb-2"><i className="bi bi-check2 fs-5 text-success"></i>{text}</div>
                                ))}
                            </div>
                            <Link className="btn btn-dark d-flex align-items-center gap-2 align-self-center mt-auto fs-5" href={block.link.href}>
                                <i className="bi bi-arrow-right"></i>
                                <span>{block.link.text}</span>
                            </Link>
                        </div>
                    </div>
                    {block?.tip && <p className="m-0 mt-2 mx-auto small" style={{ maxWidth: "750px" }}>{block.tip}</p>}
                </div>
            ))}
        </div>
    )
}