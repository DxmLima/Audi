import Link from 'next/link'

export default function Banner1() {
    return (
        <>
            <section className="banner-area banner-bg" data-background="/assets/img/banner/bannerbg.png">
                <div className='m-4'>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="banner-content">
                                
                                <h2 className="title text-white" data-aos="fade-up" data-aos-delay={200}>Inovação, Elegância e Performance</h2>
                                <p className="text-white-50" data-aos="fade-up" data-aos-delay={400}>Explore nossa linha de veículos premium projetados para oferecer a máxima sofisticação e desempenho. Agende seu test drive hoje e experimente a excelência da engenharia alemã.</p>
                               
                            </div>
                           
                        </div>
                    </div>
                 
                    <div className="banner-scroll">
                        <Link className="text-white" href="#about">Deslize Para Baixo <span><i className="fas fa-arrow-right text-white" /></span></Link>
                    </div>
                </div>
            </section>
        </>
    )
}
