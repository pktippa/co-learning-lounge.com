import React from "react";

// reactstrap components
import {
    Container,
    Row,
    Col
} from "reactstrap";

import Material from "../index-sections/Material.js";
import StagesOfContribution from "../index-sections/StagesOfContribution.js";

function CommunityContribution() {
    return (
        <>
            <div className="section section-about-us" id="community">
                <Container>
                    <Row>
                        <Col className="ml-auto mr-auto text-center" md="6">
                            <h4 className="title">Stages of learning</h4>
                            <h5 className="description">
                                Learn → Practice → Create → Collaborate → Contribute
                            </h5>
                        </Col>
                    </Row>
                    <div className="separator separator-primary"></div>
                    <StagesOfContribution />
                    <Material />
                </Container>
            </div>
        </>
    );
}

export default CommunityContribution;