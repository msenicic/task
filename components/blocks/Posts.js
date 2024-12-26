import Link from "next/link";
import Image from 'next/image';
import { dateDisplay } from "@/utils/format";

export default function Posts({title, posts}) {
    return(
        <section className="my-5">
            <div className="container-fixed">
                <h2 className="mb-4 text-center text-md-start">{title}</h2>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                    {posts.map((post, i) => (
                        <div key={i} className="col">
                            <Link href={post.link} className="card border-0 overflow-hidden mx-auto" style={{ maxWidth: "450px" }}>
                                {post.tag && <span className="position-absolute text-bg-primary py-1 ps-2 pe-3 small" style={{ top: "15px", left: "0", clipPath: "polygon(50% 0%, 100% 0, 95% 50%, 100% 100%, 0 100%, 0 50%, 0 0)" }}>{post.tag}</span>}
                                <i className="bi bi-arrow-right-circle position-absolute text-light fs-5" style={{ top: "15px", right: "15px" }}></i>
                                <Image 
                                    src={post.image} 
                                    className="card-img-top rounded-4 object-fit-cover img-fluid" 
                                    alt="Featured Image"  
                                    width={360}
                                    height={279}
                                />
                                <div className="card-body p-0 pt-3">
                                    <p className="d-inline-block border border-dark rounded-2 px-2 py-1 mb-2 small" >{post.type}</p>
                                    <h5 className="card-title m-0">{post.title}</h5>
                                    <p className="card-text"><small className="text-body-secondary">{dateDisplay(post.date)}</small></p>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}