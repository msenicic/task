"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import LoaderSkeleton from "@/components/LoaderSkeleton";
import { numberDisplay, interestDisplay } from "@/utils/format";
import Countdown from "@/utils/components/Countdown";

export default function Loans({fullList}) {
    const [loans, setLoans] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    useEffect(() => {
        const fetchLoans = async () => {
            setLoading(true);

            const limit = fullList ? "" : "?limit=3";
            const res = await fetch(`/api/loans${limit}`);
            const data = await res.json();

            setLoans(data);
            setLoading(false);
        };

        fetchLoans();
    }, [fullList]);

    const totalPages = Math.ceil(loans.length / itemsPerPage);
    const paginatedLoans = loans.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handlePageNext = () => {
        setCurrentPage(prev=> prev+1);
    };

    const handlePagePrev = () => {
        setCurrentPage(prev=> prev-1);
    };

    const displayedLoans = fullList ? paginatedLoans : loans;

    return loading ? (<LoaderSkeleton />) : (
        <section className="py-5" id="loans">
            <div className="container-fixed">
                <p className="mb-4 text-center text-md-start h2">Aktuella Lån</p>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-0">
                    {displayedLoans.map((loan) => (
                        <div key={loan.id} className="col mt-0" style={{ marginBottom: "85px" }}>
                            <Link href={`/investera/${loan.id}`} className="card border-0 overflow-hidden mx-auto" style={{ maxWidth: "450px" }}>
                                <div className="position-relative">
                                    <Image 
                                        src={loan.images[0]} 
                                        className="card-img-top rounded-4 object-fit-cover img-fluid" 
                                        alt="Featured Image"  
                                        width={360}
                                        height={279}
                                        style={{ maxHeight: "280px" }}
                                    />
                                    {loan?.fully_subscribed && <p className="m-0 position-absolute d-inline-block border border-light text-bg-dark bg-opacity-50 rounded-2 px-2 py-1 fw-medium small" style={{bottom: "15px", left: "15px"}}>Garanterat fulltecknat lån</p>}
                                </div>
                                <div className="card-body p-0 pt-3">
                                    <h5 className="card-title title mb-2">{loan.title}</h5>
                                    <p className="card-text subtitle small">{loan.subtitle}</p>
                                    <div className="mb-3">
                                        <p className="mb-1 small">Riskbetyg</p>
                                        <div className="w-100 d-flex align-items-center justify-content-around p-1 rounded-3 fs-4" style={{ backgroundColor: "#BABABA66" }}>
                                        {['A', 'B', 'C', 'D', 'E', 'F'].map(rating => (
                                            <span 
                                                key={rating}
                                                className={`lh-1 px-2 px-sm-3 py-1 rounded-3 ${loan.rating === rating && "bg-primary opacity-100 text-light fw-medium"}`}
                                                style={{ opacity: "40%" }}
                                            >
                                                {rating}
                                            </span>
                                        ))}
                                        </div>
                                    </div>
                                    <div className="mb-3 d-flex justify-content-between">
                                        <div>
                                            <p className="mb-1 small">Årsränta</p>
                                            <p className="m-0 h2 lh-1">{interestDisplay(loan.interest)}</p>
                                        </div>
                                        <div className="text-end">
                                            <p className="mb-1 small">Lånebelopp</p>
                                            <p className="m-0 h2 lh-1">{numberDisplay(loan.amount)}</p>
                                            <span className="text-uppercase fw-medium small">sek</span>
                                        </div>
                                    </div>
                                    <div className="mb-3 d-flex justify-content-between">
                                        <p className="m-0 small">Tid kvar</p>
                                        <Countdown expirationDate={loan.expiration_date}/>
                                    </div>
                                    <div>
                                        <p className="mb-1 small">Tecknat</p>
                                        <div className="progress rounded-4 h-auto fw-medium" role="progressbar" aria-valuenow={`${loan.percentage}`} aria-valuemin="0" aria-valuemax="100" style={{ backgroundColor: "#D0D0D0", fontSize: ".875em" }}>
                                            <div className="progress-bar bg-primary rounded-4 align-items-end justify-content-center pe-2 overflow-visible" style={{ width: `${loan.percentage}%` }}>{`${loan.percentage}%`}</div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
                {fullList ? (
                <div className="d-flex justify-content-center gap-3">
                    <Link 
                        href="#loans"
                        className={`d-flex align-items-center justify-content-center btn border border-opacity-25 border-primary border-3 rounded-3 text-primary fw-bold ${currentPage === 1 ? "disabled" : ""}`}
                        style={{ width: "45px", height: "45px" }}
                        onClick={handlePagePrev}
                    >
                        <svg style={{ rotate: "180deg" }} width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.9553 11L10.2701 10.3281L14.2997 6.46875H1V5.53125H14.2997L10.2701 1.67188L10.9553 1L16.1758 6L10.9553 11Z" fill="currentColor" stroke="currentColor"/>
                        </svg>
                    </Link>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <Link
                            key={page} 
                            href="#loans" 
                            className={`d-flex align-items-center justify-content-center btn border border-primary border-3 rounded-3 text-secondary fw-bold ${page === currentPage ? "border-opacity-100 bg-opacity-25 bg-primary text-dark" : "border-opacity-25"}`}
                            style={{ width: "45px", height: "45px" }}
                            onClick={() => handlePageChange(page)}
                        >
                            {page}
                        </Link>
                    ))}
                    <Link 
                        href="#loans"
                        className={`d-flex align-items-center justify-content-center btn border border-opacity-25 border-primary border-3 rounded-3 text-primary fw-bold ${currentPage === totalPages ? "disabled" : ""}`}
                        style={{ width: "45px", height: "45px" }}
                        onClick={handlePageNext}
                    >
                        <svg width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.9553 11L10.2701 10.3281L14.2997 6.46875H1V5.53125H14.2997L10.2701 1.67188L10.9553 1L16.1758 6L10.9553 11Z" fill="currentColor" stroke="currentColor"/>
                        </svg>
                    </Link>
                </div>
                ): (
                <Link 
                    href="/investera" 
                    className="border border-success border-opacity-25 text-secondary text-decoration-underline d-flex align-items-center justify-content-center w-100 rounded-3"
                    style={{ height: "63px" }}
                >
                    Visa alla lån för att finansiera
                </Link>
                )}
            </div>
        </section>
    );
}