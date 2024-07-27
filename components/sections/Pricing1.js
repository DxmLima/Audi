import PricingTable from '../elements/PricingTable'

export default function Pricing1() {
    return (
        <>
            <section className="pricing__area pricing__bg" data-background="/assets/img/bg/pricing_bg.jpg">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-5">
                            <div className="section-title text-center mb-30 tg-heading-subheading animation-style3">
                              
                                <h2 className="title tg-element-title">Escolha a Melhor opção para você</h2>
                            </div>
                        </div>
                    </div>
                    <div className="pricing__item-wrap">
                    <PricingTable />
                    </div>
                </div>
                
            </section>
        </>
    )
}
