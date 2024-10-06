import React from "react";
import './Services.css';

const Services = () => {
    const services = [
        {
            id: 1,
            icon: "fas fa-robot",
            title: "Code Your Robot",
            description: "Guide your robot through adventures with fun coding challenges!"
        },
        {
            id: 2,
            icon: "fas fa-paint-brush",
            title: "Create Web Wonders",
            description: "Design cool web pages with colorful HTML & CSS magic!"
        },
        {
            id: 3,
            icon: "fas fa-gamepad",
            title: "Build Fun Games",
            description: "Make exciting games with JavaScript and play with your friends!"
        },
        {
            id: 4,
            icon: "fas fa-comments",
            title: "Chat with Bots",
            description: "Talk to friendly bots and learn coding with interactive conversations!"
        },
        // New icons
        {
            id: 5,
            icon: "fas fa-cogs",
            title: "Tech Tinker",
            description: "Experiment with cool tech tools and gadgets in our workshops!"
        },
        {
            id: 6,
            icon: "fas fa-digital-tachograph",
            title: "Digital Art",
            description: "Create awesome digital drawings and animations with our easy tools!"
        },
        {
            id: 7,
            icon: "fas fa-globe",
            title: "Explore Web",
            description: "Discover how websites work and create your own online space!"
        },
        {
            id: 8,
            icon: "fas fa-flask",
            title: "Code Experiments",
            description: "Run fun coding experiments and see instant results with interactive tools!"
        }
    ];

    return (
        <div className="services-container" data-aos="fade-up">
            <h2 className="services-title" data-aos="fade-up" data-aos-delay="300">What You Can Learn</h2>
            
            <div className="services-content">
                {/* Left Corner: Reformulated Content about EdTech */}
                <div className="services-left">
                    <p>
                        **Let the fun begin!** Explore the world of coding with our exciting EdTech platform. From guiding robots and creating web wonders to building games and chatting with friendly bots, each activity is designed to be a thrilling adventure. Join us and dive into an interactive learning experience that makes every lesson fun and engaging!
                    </p>
                </div>

                {/* Center Line */}
                <div className="center-line"></div>

                {/* Right Corner: Small Description with Icon */}
                <div className="services-right">
                    <h3><i className="fas fa-star"></i> Our Services</h3>
                    <ul>
                        {services.map(service => (
                            <li key={service.id}>
                                <i className={service.icon}></i> {service.title}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Services List at the Bottom */}
            <div className="services-list" data-aos="fade-up" data-aos-delay="600">
                {services.map((service) => (
                    <div className="service-card" data-aos-delay={service.id * 200} key={service.id}>
                        <i className={service.icon}></i>
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
