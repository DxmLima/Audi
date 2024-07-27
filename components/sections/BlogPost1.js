import Link from 'next/link'

export default function BlogPost1() {
    return (
        <>
            <section className="blog-post-area blog-post-bg">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-4 col-lg-6 col-md-10">
                            <div className="blog-post-item shine-animate-item">
                                <div className="blog-post-thumb">
                                    <Link href="/blog-details" className=""><img src="/assets/img/models/01.png" alt="" /></Link>
                                   
                                </div>
                                <div className="blog-post-content">
                                    <h2 className="title-banner-model"><Link href="">E-tron GT</Link></h2>
                                    <h2 className="title-mode-btn  text-center"><Link href="https://www.audi-mediacenter.com/en/audi-e-tron-gt-13716">Explore More</Link></h2>
                                  
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-10">
                            <div className="blog-post-item shine-animate-item">
                                <div className="blog-post-thumb">
                                    <Link href="/blog-details" className=""><img src="/assets/img/blog/blog_post01.jpg" alt="" /></Link>
                                   
                                </div>
                                <div className="blog-post-content">
                                    <h2 className="title-banner-model"><Link href="/blog-details">E-tron GT</Link></h2>
                                  
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-10">
                            <div className="blog-post-item shine-animate-item">
                                <div className="blog-post-thumb">
                                    <Link href="/blog-details" className=""><img src="/assets/img/blog/blog_post01.jpg" alt="" /></Link>
                                   
                                </div>
                                <div className="blog-post-content">
                                    <h2 className="title-banner-model"><Link href="/blog-details">E-tron GT</Link></h2>
                                  
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-6 col-md-10">
                            <div className="blog-post-item shine-animate-item">
                                <div className="blog-post-thumb">
                                    <Link href="/blog-details" className=""><img src="/assets/img/blog/blog_post01.jpg" alt="" /></Link>
                                   
                                </div>
                                <div className="blog-post-content">
                                    <h2 className="title-banner-model"><Link href="/blog-details">E-tron GT</Link></h2>
                                  
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-6 col-md-10">
                            <div className="blog-post-item shine-animate-item">
                                <div className="blog-post-thumb">
                                    <Link href="/blog-details" className=""><img src="/assets/img/blog/blog_post01.jpg" alt="" /></Link>
                                   
                                </div>
                                <div className="blog-post-content">
                                    <h2 className="title-banner-model"><Link href="/blog-details">E-tron GT</Link></h2>
                                  
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-6 col-md-10">
                            <div className="blog-post-item shine-animate-item">
                                <div className="blog-post-thumb">
                                    <Link href="/blog-details" className=""><img src="/assets/img/models/" alt="" /></Link>
                                   
                                </div>
                                <div className="blog-post-content">
                                    <h2 className="title-banner-model"><Link href="/blog-details">E-tron GT</Link></h2>
                                  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               
            </section>
        </>
    )
}
