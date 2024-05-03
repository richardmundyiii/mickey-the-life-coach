import { Container, Row, Col } from "react-bootstrap";
import "./PlanPage.css";

export default function PlanPage() {
  const plans = [
    {
      name: "Basic",
      benefits: [
        { name: "30 Min", value: "Consultation" },
        { name: "4 5-Min", value: "Facetimes" },
        { name: "Monthly", value: "Meal Planner" },
      ],
    },
    {
      name: "Premium",
      benefits: [
        { name: "1 Hr", value: "Consultation" },
        { name: "4 10-Min", value: "Facetimes" },
        { name: "Weekly", value: "Meal Planner" },
        { name: "Daily", value: "Workout Regimine" },
      ],
    },
    {
      name: "Executive",
      benefits: [
        { name: "Unlimited", value: "Consultation" },
        { name: "Unlimited", value: "Facetimes" },
        { name: "Weekly", value: "Sitdowns" },
        { name: "Daily", value: "Meal & Workout Planner" },
        { name: "24/7", value: "Support" },
      ],
    },
  ];
  return (
    <Container fluid className="pricing-container">
      <div id="generic_price_table">
        <section>
          <Container>
            <Row>
              <Col md={12}>
                <div className="price-heading clearfix">
                  <h1>Pricing</h1>
                </div>
              </Col>
            </Row>
            <Row>
              {plans.map((plan, index) => (
                <Col md={4} key={index}>
                  <div className="generic_content clearfix">
                    <div className="generic_head_price clearfix">
                      <div className="generic_head_content clearfix">
                        <div className="head_bg"></div>
                        <div className="head">
                          <span>{plan.name}</span>
                        </div>
                      </div>
                    </div>
                    <div className="generic_feature_list">
                      <ul>
                        {plan.benefits.map((benefit, index) => (
                          <li key={index}>
                            <span>{benefit.name}</span> {benefit.value}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </section>
      </div>
    </Container>
  );
}
