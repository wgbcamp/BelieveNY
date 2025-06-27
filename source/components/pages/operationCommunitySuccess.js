import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import manuscript from '../../documents/BNY 2025 Manuscript for Help-Seeking Mix-Methods Project.pdf';

const operationCommunitySuccess = () => {

    return(
        <Container>
            <Row>
                <Col>
                    <div className='my-5 pt-4'>
                        OCS began as an initiative to foster collaboration among nonprofits and community organizations and to reduce competition within the nonprofit sector. While working towards this goal presented challenges, we remain enthusiastic about the importance of collaboration in order to best serve our community. Our efforts have evolved to not only continue promoting partnership but also to focus on essential research and evaluation.
                    </div>
                    <div className='my-5'>
                        Today, OCS is our in-house research team dedicated to staying informed about the latest concerns and needs of the communities we serve. This commitment helps us evaluate our programs, ensure meaningful community impact, and incorporate valuable input as we develop and grow. We understand that ongoing research and continuous evaluation are crucial to adapting our services effectively. 
                    </div>
                    <div className="d-flex justify-content-center">
                        <a className='btn btn-dark mt-4 mb-5 rounded-5 fw-bold mx-0' download href={manuscript}>
                            2025 Published Survey Results
                        </a>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default operationCommunitySuccess;