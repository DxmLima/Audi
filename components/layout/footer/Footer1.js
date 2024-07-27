import Link from "next/link"

export default function Footer1() {
    return (
        <>
            <footer>
                <div className="footer-area">
                    <div className="footer-top">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-3 col-lg-4 col-md-6">
                                    <div className="footer-widget">
                                        <div className="fw-logo mb-25">
                                            <Link href="/"><img src="/assets/img/logo/audilogo.png" alt="" /></Link>
                                        </div>
                                        <div className="footer-content">
                                            <p className='text-white'>All Media use by <Link href="/"  className='title-banner-red2 '> Audi MediaCenter </Link> </p>
                                            <div className="footer-social">
                                                <ul className="list-wrap">
                                                    <li><Link href="https://www.facebook.com/audi" target='_blank'><i className="fab fa-facebook-f" /></Link></li>
                                                    <li><Link href="https://www.linkedin.com/company/audi-ag/?originalSubdomain=de" target='_blank'><i className="fab fa-linkedin" /></Link></li>
                                                    <li><Link href="https://www.instagram.com/audi/" target='_blank'><i className="fab fa-instagram" /></Link></li> 
                                                    <li><Link href="https://www.youtube.com/audi" target='_blank'><i className="fab fa-youtube" /></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                   
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                    <div>
                                      
                                        <div className="footer-link-list">
                                            <ul className="list-wrap ">
                                                <li><Link href="/about">Home</Link></li>
                                                <li><Link href="/Galeria">Galeria</Link></li>
                                                <li><Link href="/Tech">Tech</Link></li> 
                                                <li><Link href="/Model">Modelos</Link></li>
                                                <li><Link href="/CaseStudy">Case Study</Link></li> 
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6">
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                   
                    <div className="footer-shape">
                        <img src="/assets/img/images/footer_shape01.png" alt="" data-aos="fade-right" data-aos-delay={400} />
                        <img src="/assets/img/images/footer_shape02.png" alt="" data-aos="fade-left" data-aos-delay={400} />
                        <img src="/assets/img/images/footer_shape03.png" alt="" data-parallax="{&quot;x&quot; : 100 , &quot;y&quot; : -100 }" />
                    </div>
                </div>
            </footer>
        </>
    )
}
