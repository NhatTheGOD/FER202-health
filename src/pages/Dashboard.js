import BloodRecords from "../components/dashboard/BloodRecord";
import { Col,Container,Row } from "react-bootstrap";
import WelcomeBack from "../components/dashboard/WelcomeBack";
import WorkoutChart from "../components/dashboard/WorkOutRecord";
import HealthArticle from "../components/dashboard/HealthArticle";

const Dashboard = () => {
    
    return (
      <div>
        <Row className='main-content'>
        <WelcomeBack username={"Nhat"}/>
        <Col md={6}>
        <BloodRecords />
        </Col>
        <Col md={6}>
        <WorkoutChart />
        </Col>
        <Col md={6}>
        <BloodRecords />
        </Col>
        <Col md={6}>
        <BloodRecords />
        </Col>
      </Row>
      <HealthArticle/>
      </div>
    );
}

export default Dashboard;