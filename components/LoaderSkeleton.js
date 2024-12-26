export default function LoaderSkeleton() {
    return(
        <section className="py-5" id="loans">
            <div className="container-fixed">
                <h1 className="mb-4 text-center text-md-start">Aktuella Lån</h1>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-0">
                    {Array.from({length: 3}, (_, i) => (
                        <div key={i} className={`col mt-0 ${i === 2 && "d-none d-lg-block"} ${i === 1 && "d-none d-md-block"}`} style={{ marginBottom: "85px" }}>
                            <div className="mx-auto" style={{ maxWidth: "450px" }} aria-hidden="true">
                                <div className="placeholder-glow">
                                    <span className="placeholder col-12 rounded-4" style={{ height: "280px" }}></span>
                                </div>
                                <div className="pt-3">
                                    <h5 className="mb-3 placeholder-glow">
                                        <span className="placeholder col-12 mb-1" style={{ height: "24px" }}></span>
                                        <span className="placeholder col-5" style={{ height: "24px" }}></span>
                                    </h5>
                                    <p className="placeholder-glow">
                                        <span className="placeholder col-12" style={{ height: "20px" }}></span>
                                        <span className="placeholder col-12" style={{ height: "20px" }}></span>
                                        <span className="placeholder col-3" style={{ height: "20px" }}></span>
                                    </p>
                                    <div className="mb-3">
                                        <p className="mb-1 placeholder-glow">
                                            <span className="placeholder col-3" style={{ height: "20px" }}></span>
                                        </p>
                                        <div className="placeholder-glow">
                                            <span className="placeholder col-12 rounded-3" style={{ height: "35px" }}></span>
                                        </div>
                                    </div>
                                    <div className="mb-3 d-flex">
                                        <div className="w-100">
                                            <p className="mb-1 placeholder-glow">
                                                <span className="placeholder col-6" style={{ height: "20px" }}></span>
                                            </p>
                                            <p className="placeholder-glow">
                                                <span className="placeholder col-7" style={{ height: "32px" }}></span>
                                            </p>
                                        </div>
                                        <div className="text-end w-100">
                                            <p className="mb-1 placeholder-glow">
                                                <span className="placeholder col-7" style={{ height: "20px" }}></span>
                                            </p>
                                            <p className="placeholder-glow mb-1">
                                                <span className="placeholder col-11" style={{ height: "32px" }}></span>
                                            </p>
                                            <p className="placeholder-glow">
                                                <span className="placeholder col-3" style={{ height: "20px" }}></span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="mb-3 d-flex">
                                        <p className="m-0 placeholder-glow w-25">
                                            <span className="placeholder col-12" style={{ height: "20px" }}></span>
                                        </p>
                                        <div className="d-flex w-75 justify-content-end">
                                            <div className="col-3 text-center">
                                                <p className="mb-1 placeholder-glow">
                                                    <span className="placeholder col-6" style={{ height: "32px" }}></span>
                                                </p>
                                                <p className="placeholder-glow m-0">
                                                    <span className="placeholder col-10" style={{ height: "20px" }}></span>
                                                </p>
                                            </div>
                                            <div className="col-3 text-center">
                                                <p className="mb-1 placeholder-glow col-12">
                                                    <span className="placeholder col-6" style={{ height: "32px" }}></span>
                                                </p>
                                                <p className="placeholder-glow m-0">
                                                    <span className="placeholder col-10" style={{ height: "20px" }}></span>
                                                </p>
                                            </div>
                                            <div className="col-3 text-center">
                                                <p className="mb-1 placeholder-glow">
                                                    <span className="placeholder col-6" style={{ height: "32px" }}></span>
                                                </p>
                                                <p className="placeholder-glow m-0">
                                                    <span className="placeholder col-10" style={{ height: "20px" }}></span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="mb-1 placeholder-glow">
                                            <span className="placeholder col-3" style={{ height: "20px" }}></span>
                                        </p>
                                        <div className="placeholder-glow">
                                            <span className="placeholder col-12 rounded-4" style={{ height: "22px" }}></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}