import Layout from "@/components/layout/Layout"
import About1 from "@/components/sections/About1"
import About8 from "@/components/sections/About8"
import Banner1 from "@/components/sections/Banner1"
import BlogPost1 from "@/components/sections/BlogPost1"
import Callback1 from "@/components/sections/Callback1"
import Choose1 from "@/components/sections/Choose1"
import Consulting1 from "@/components/sections/Consulting1"
import Counter1 from "@/components/sections/Counter1"
import Project1 from "@/components/sections/Project1"
import Request1 from "@/components/sections/Request1"
import Request2 from "@/components/sections/Request3"
import Services1 from "@/components/sections/Services1"
import Team1 from "@/components/sections/Team1"
import Testimonial1 from "@/components/sections/Testimonial1"
import Banner3 from './../components/sections/Banner3';
import Banner4 from './../components/sections/Banner4';
import Brand1 from './../components/sections/Brand1';


export const metadata = {
    title: 'Audi Project',
}

export default function Home() {
    return (
        <>
            <Layout headerStyle={3} footerStyle={1}>
                <Banner1 />
                <Banner3 />
                <Brand1 />
                <About8 />              
                <Request1 />    
                <Banner4 />        
            </Layout>
        </>
    )
}