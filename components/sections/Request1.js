import Link from 'next/link'

export default function Request1() {
    return (
        <>
            <section className="request-area">
                <div className="container">
                    <div className="row justify-content-center">
                        <h1 className='text-center title-banner p-4'> Experimente a Excelência Audi</h1>
                        <h3 className='text-center title-mode pt-2 pb-2'> Veja de perto os detalhes impressionantes e a tecnologia avançada que tornam cada modelo Audi uma obra-prima da engenharia automotiva.</h3>
                        <div className="col-lg-8">
                            <div className="request-content text-center tg-heading-subheading animation-style3">
                            <video className='space-video' autoPlay loop muted width="100%" height="100%" controls preload="none">
                    <source src="assets/video/audirs.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                    </video>
                            </div>
                        </div>
                    </div>
                </div>
              
            </section>
        </>
    )
}
