import Link from 'next/link'

export default function Banner4() {
    return (
        <>
            <section className="banner__area-four banner__bg-four" data-background="/assets/img/bg/bgvideo2.jpg" >
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-6">
                            <div className="text-white">
                                <h2 className="title-banner-white" data-aos="fade-up" data-aos-delay={100}>Explore toda a Família Audi e Escolha a Melhor Opção Para Você !</h2>
                                
                                <Link href="/contact" className="btn" data-aos="fade-up" data-aos-delay={600}>Get Started</Link>
                                
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
        </>
    )
}
