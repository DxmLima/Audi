import React from 'react'
import Layout from "@/components/layout/Layout"
import Link from 'next/link'
import BlogPost1 from './../../components/sections/BlogPost1';

function Galeria() {
  return (
    <>
    <Layout headerStyle={3} footerStyle={1}>
    <section className="banner-area banner-bg-gallery" data-background="/assets/img/bg/drift.png">
                <div className='text-center'>
                    <div className="">
                        <div className="text-center">
                            <div className="text-center">
                                
                                <h2 className="title-banner-white text-center" data-aos="fade-up" data-aos-delay={200}>Explore Nossa Galeria</h2>
                              
                               
                            </div>
                           
                        </div>
                    </div>
                 
                    
                </div>
            </section>
            <BlogPost1 />
    </Layout>
</>
  )
}

export default Galeria