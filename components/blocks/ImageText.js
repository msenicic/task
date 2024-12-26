import Link from "next/link";
import Image from "next/image";

export default function ImageText({image, title, text, link}) {
    return(
        <section className="my-5">
            <div className="container-fixed position-relative py-5">
                <Image 
                    src="/icon.png" 
                    className="d-none d-md-block object-fit-cover h-100 w-auto position-absolute top-0 bottom-0"
                    style={{ right: "50px", opacity: "10%" }} 
                    alt="Bg Image"
                    width={513}
                    height={403}  
                    priority={false}
                />
                <div className="row position-relative gap-3 gap-md-0">
                    <div className="col-md-6 d-flex align-items-center">
                        <div className="position-relative w-100" style={{ height: "0 !important", padding: "0 0 77.55%" }}>
                        <Image 
                            src={image} 
                            className="rounded-4 object-fit-cover" 
                            alt="Featured Image"  
                            fill  
                            sizes="(max-width: 768px) 100vw, 50vw" 
                        />
                        </div>
                    </div>
                    <div className="col-md-6 d-flex flex-column justify-content-between align-items-start">
                        <h2 className="m-0 display-5">{title}</h2>
                        <div dangerouslySetInnerHTML={{ __html: text }} />
                        <Link className="btn btn-dark d-flex align-items-center gap-2" href={link.href}>
                            <svg width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.9553 11L10.2701 10.3281L14.2997 6.46875H1V5.53125H14.2997L10.2701 1.67188L10.9553 1L16.1758 6L10.9553 11Z" fill="currentColor" stroke="currentColor"/>
                            </svg>
                            <small>{link.text}</small>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}