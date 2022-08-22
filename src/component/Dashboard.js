import React from "react";
import "chart.js/auto";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import SalesChart from "./SalesChart";
import  Feeds  from "./Feeds";
import ProjectTables from "./ProjectTables"
import { Col, Row } from "reactstrap";


const Dashboard = () => {
  return (
    <>
   <div>
    
      <Row>
        <Col sm="6" lg="6" xl="7" xxl="8">
          <SalesChart />
        </Col>
        <Col sm="6" lg="6" xl="5" xxl="4">
          <Feeds />
        </Col>
      </Row>
    
      <Row>
        <Col lg="12">
          <ProjectTables />
        </Col>
      </Row>
     <Row>
      </Row>
    </div>
    </>
  );
};

export default Dashboard;
