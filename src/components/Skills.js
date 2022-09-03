import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import imgReact from '../assets/react-logo.png';
import imgBootstrap from '../assets/bootstrap.png';
import imgUiUx from '../assets/uiux.png';
import imgGit from '../assets/git.png';
import imgMongo from '../assets/mongo.png';
import imgNode from '../assets/node-js.png';
import imgRedux from '../assets/redux-logo.png';
import imgHtml from '../assets/html5.png';
import imgCss from '../assets/css3.png';
import imgJs from '../assets/js.png';
import imgUnity from '../assets/unity.png';
import imgTs from '../assets/ts.png';
import { SkillCard } from './SkillCard';

const Skills = () => {


    return ( 
        <Container>

            <Row>
                <Col xs={12} md={12} lg={4}>
                    <div className='container-fluid skills-div'>
                        SKILLS
                    </div>
                </Col>

                <Col xs={12} md={12} lg={8}>
                        <Row>
                            <Col xs={6} md={4} lg={4}>
                                <SkillCard imgReact={imgReact} nameSkill={'React JS'}/>
                            </Col>
                            <Col xs={6} md={4} lg={4}>
                                <SkillCard imgReact={imgNode} nameSkill={'Node JS'}/>
                            </Col>
                            <Col xs={6} md={4} lg={4}>
                                <SkillCard imgReact={imgMongo} nameSkill={'Mongo DB'}/>
                            </Col>
                            <Col xs={6} md={4} lg={4}>
                                <SkillCard imgReact={imgRedux} nameSkill={'Redux'}/>
                            </Col>
                            <Col xs={6} md={4} lg={4}>
                                <SkillCard imgReact={imgBootstrap} nameSkill={'Bootstrap'}/>
                            </Col>
                            <Col xs={6} md={4} lg={4}>
                                <SkillCard imgReact={imgTs} nameSkill={'TypeScript'}/>
                            </Col>
                        </Row>

                        <Row>
                            <Col xs={6} md={4} lg={4}>
                                <SkillCard imgReact={imgHtml} nameSkill={'HTML'}/>
                            </Col>
                            <Col xs={6} md={4} lg={4}>
                                <SkillCard imgReact={imgCss} nameSkill={'CSS'}/>
                            </Col>
                            <Col xs={6} md={4} lg={4}>
                                <SkillCard imgReact={imgJs} nameSkill={'JavaScript'}/>
                            </Col>
                            <Col xs={6} md={4} lg={4}>
                                <SkillCard imgReact={imgUiUx} nameSkill={'UI / UX'}/> 
                            </Col>
                            <Col xs={6} md={4} lg={4}>
                                <SkillCard imgReact={imgUnity} nameSkill={'Unity C#'}/>
                            </Col>
                            <Col xs={6} md={4} lg={4}>
                                <SkillCard imgReact={imgGit} nameSkill={'Git'}/>
                            </Col>
                            
                        </Row>
                
                </Col>
    
            </Row>
        </Container>
        
     );
}
 
export default Skills;