import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import imgPomodoro from '../assets/imgPomodoro.png';
import imgPrespuesto from '../assets/presupuesto.png';
// import imgPixabay from '../assets/imgPixabay.png';
import imgPapershipx from '../assets/imgPapershipx.png';
import imgInventario from '../assets/inventario.PNG';
import imgTodolist from '../assets/todolist-skill.png';
// import imgMerntask from '../assets/mernTaskImg.png';
// import imgCalendar from '../assets/imgCalendar.png';

const Projects = () => {
    return ( 
        <>
            <Row id='projects'>
                <Col xs={{ order: 'first' }} md={2} lg={4}></Col>
                <Col xs md={8} lg={4}>
                    <h5 className='h5-project'>Projects</h5>
                    <div className='box'>

                    </div>
                    <div className='box-project'>
                        Some projects I have done throughout my career as a software developer.
                    </div>
                </Col>
                <Col xs={{ order: 'last' }} md={2} lg={4}></Col>
            </Row>

            <Row>
                <Col xs={12} md={6} lg={4}>
                    <ProjectCard imgProject={imgPomodoro} urlProject={'https://briantgrijalva.github.io/pomodoro-app/'}/>
                </Col>
                <Col xs={12} md={6} lg={4}>
                    <ProjectCard imgProject={imgPrespuesto} urlProject={'https://controldegastosbgreact.netlify.app/'}/>
                </Col>
                <Col xs={12} md={6} lg={4}>
                    <ProjectCard imgProject={imgPapershipx} urlProject={'https://play.google.com/store/apps/details?id=com.KirinXstudio.PaperShipX'}/>
                </Col>
                <Col xs={12} md={6} lg={4}>
                    <ProjectCard imgProject={imgInventario} urlProject={'https://inventario-mb.netlify.app/'}/>
                </Col>
                <Col xs={12} md={6} lg={4}>
                    <ProjectCard imgProject={imgTodolist} urlProject={'https://skill-todo-list.netlify.app/'}/>
                </Col>
                <Col xs={12} md={6} lg={4}>

                </Col>
            </Row>

        </>
     );
}
 
export default Projects;