import React from "react";
import Image, { StaticImageData } from "next/image";

export default function About() {
    return (
        <section id="about" className="dark-bg">
            <div className="flex">
                <div className="flex-full">
                    <AboutCard
                        title="Full Stack Development"
                        icon="/icons/design.svg"
                        description="We have amassed unmatched expertise dealing with both front-end and back-end technologies as a well-known full stack development business."
                        projects={7} />
                    <AboutCard
                        title="Web Design / Web Developer"
                        icon="/icons/code.svg"
                        description="One of the major advantages of having a website is that it is accessible to anyone, anywhere, anytime. We develop all type of websites with trending  technologies."
                        projects={10} />
                    <AboutCard
                        title="Mobile Apps Developer"
                        icon="/icons/phone.svg"
                        description="Reaching your clients with app is trending in current market. We help you to turn your dream business into reality by developing your application in fair cost."
                        projects={7} />
                </div>
                
                <div className="flex-full about-text">
                    <h5 className="gray">Introduce</h5>
                    <h1 className="white">Hello, I&#39;m Dapper Developer</h1>
                    <h3 className="white">Our vision is to be a leading biggest app developers and software development company!</h3>
                    <p className="gray">Dapper Developer is a platform for mobile app developer and web developer. We are Best App Development Company to provide programming guides, tech updates, software, top picks, development, tutorials, and blogs as well as hosting services. Tune in to have a great future mobile app development companies.</p>
                </div>
            </div>

            <div className="flex partners justify-space">
                <Image src="/images/partners/tvbox.png" height={45} width={180} alt="wallety" />
                <Image src="/images/partners/visom6.png" height={45} width={180} alt="artisty" />
                <Image src="/images/partners/net.webp" height={45} width={180} alt="khedma-lik" />
                <Image src="/images/partners/pneck.png" height={45} width={180} alt="directy" />
                <Image src="/images/partners/story.png" height={45} width={180} alt="telefy" />
            </div>
        </section>
    )
}

type Props = {
    title: string,
    icon: string | StaticImageData,
    description: string,
    projects: number
}

function AboutCard ({title, icon, description, projects} : Props) {
    return(
        <div className="light-bg about-card">
            <div className="flex justify-space">
                <h3 className="green">{title}</h3>
                <Image src={icon} width={28} height={28} alt={title} />
            </div>
            <p className="white">{description}</p>
            <span className="gray">{projects.toString()} projects</span>
        </div>
    )
}