import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Link } from 'gatsby';
import PortfolioContext from '../../context/context';
import Tilt from 'react-tilt';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectImg from '../Image/ProjectImg';


const Objectives = () => {
    const { objectives } = useContext(PortfolioContext);
    const { title, description, nextLink, prevLink, projects } = objectives;
    const [isDesktop, setIsDesktop] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        if (window.innerWidth > 769) {
        setIsDesktop(true);
        setIsMobile(false);
        } else {
        setIsMobile(true);
        setIsDesktop(false);
        }
    }, []);
    
    return(
        <section id="objectives" className="jumbotron">
            <Container>
                
                <div className="objectives-wrapper">
               
                    <h1 className="objectives-title">{ title || "OBJECTIVE #"}</h1>
                    <p className="objectives-text">{description || "Lorem ipsum"}</p>
                        
                    {prevLink && (<Link
                        
                        to={prevLink}
                        className="cta-btn objectives-cta"
                    >
                        <i className="fa fa-angle-left fa-lg fa-lefta" aria-hidden="true" />
                        Previous</Link>)}
                    <Link
                        
                        to="/"
                        className="cta-btn objectives-cta"
                    >Home</Link>
                    {nextLink && (<Link
                        
                        to={nextLink}
                        className="cta-btn objectives-cta"
                    >
                        Next
                        <i className="fa fa-angle-right fa-lg fa-righta" aria-hidden="true" />
                        </Link>)}

                    <div style={{
                        alignItems: 'center',
                        margin: '4rem',
                    }}>
                    {projects && projects.map((project) => {
                        const { id, img, title, info, repo, source } = project;

                        return(
                            <Row key={id} className="row">
                                <Col lg={4} sm={12}>
                                <Fade
                                    left={isDesktop}
                                    bottom={isMobile}
                                    duration={1000}
                                    delay={500}
                                    distance="30px"
                                    
                                >
                                    <div className="objectives-wrapper__text">
                                    <h3 className="objectives-wrapper__text-title">{title || 'Project Title'}</h3>
                                    <div>
                                        <p>
                                        {info ||
                                            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.'}
                                        </p>
                                    </div>

                                    {repo && (
                                        <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="cta-btn objectives-cta"
                                        href={repo}
                                        >
                                        Source Code
                                        </a>
                                    )}
                                    {source && (
                                        <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="cta-btn objectives-cta"
                                        href={source}
                                        >
                                        View
                                        </a>
                                    )}
                                    </div>
                                </Fade>
                                
                                </Col>
                                <Col lg={5} sm={7}>
                                <Fade
                                    right={isDesktop}
                                    bottom={isMobile}
                                    duration={1000}
                                    delay={1000}
                                    distance="30px"
                                >
                                    <div className="objectives-wrapper__image">
                                    
                                        <Tilt
                                        options={{
                                            reverse: false,
                                            max: 8,
                                            perspective: 1000,
                                            scale: 1,
                                            speed: 300,
                                            transition: true,
                                            axis: null,
                                            reset: true,
                                            easing: 'cubic-bezier(.03,.98,.52,.99)',
                                        }}
                                        >
                                        <div data-tilt className="thumbnail rounded">
                                            <ProjectImg alt={title} filename={img} />
                                        </div>
                                        </Tilt>
                                    
                                    </div>
                                </Fade>
                                </Col>
                            </Row>
                        );
                    })}
                    </div>
                    
                </div>
                
            </Container>
        </section>
    )
}


export default Objectives