import { Row, Col, Popover, Tag } from "antd";
import Image from "next/image";
import Link from "next/link";
import { EnvironmentFilled } from "@ant-design/icons";
import menu_dots from "../../../public/assets/menu_dots.svg";
import trail_background_image from "../../../public/assets/trail_background_image.png";

// Consistent ESG Project Data (matching all modules)
const esgProjects = [
  {
    projectId: "PROJ-2024-001",
    name: "Lagos Solar Farm Initiative",
    sector: "Renewable Energy",
    location: "Lagos State",
    taxonomyStatus: "Green",
    esgStatus: "Complete",
    amount: "₦2.5B",
  },
  {
    projectId: "PROJ-2024-002",
    name: "Kano Water Treatment Plant",
    sector: "Water & Sanitation",
    location: "Kano State",
    taxonomyStatus: "Green",
    esgStatus: "Complete",
    amount: "₦1.8B",
  },
  {
    projectId: "PROJ-2024-003",
    name: "Port Harcourt Refinery Upgrade",
    sector: "Oil & Gas",
    location: "Rivers State",
    taxonomyStatus: "Transition",
    esgStatus: "Incomplete",
    amount: "₦4.5B",
  },
  {
    projectId: "PROJ-2024-004",
    name: "Abuja Metro Rail Extension",
    sector: "Transportation",
    location: "FCT, Abuja",
    taxonomyStatus: "Green",
    esgStatus: "Complete",
    amount: "₦3.2B",
  },
  {
    projectId: "PROJ-2024-005",
    name: "Kaduna Coal Power Plant",
    sector: "Energy",
    location: "Kaduna State",
    taxonomyStatus: "Not Green",
    esgStatus: "Incomplete",
    amount: "₦3.8B",
  },
  {
    projectId: "PROJ-2024-006",
    name: "Enugu Waste Management Facility",
    sector: "Waste Management",
    location: "Enugu State",
    taxonomyStatus: "Green",
    esgStatus: "Complete",
    amount: "₦950M",
  },
];

const AllProgramme = () => {
  const getTaxonomyColor = (status: string) => {
    switch (status) {
      case "Green":
        return "green";
      case "Transition":
        return "orange";
      case "Not Green":
        return "red";
      default:
        return "default";
    }
  };

  const getESGStatusColor = (status: string) => {
    return status === "Complete" ? "green" : "orange";
  };

  return (
    <div className="program-container">
      <Row gutter={[20, 18]} className="program-section">
        {esgProjects.map((project) => (
          <Col xs={{ span: 24 }} lg={{ span: 8 }} key={project.projectId}>
            <div className="cardStyle">
              <div className="cardContainer">
                <div className="progImg">
                  <Image
                    src={trail_background_image}
                    alt="Project Image"
                    width={100}
                    height={100}
                  />
                </div>
                <div className="rightContent">
                  <div className="subRight1">
                    <h3 className="progName">{project.name}</h3>
                    <Popover
                      content={
                        <div>
                          <Link href={`/app/projects-drilldown`} className="content-p">
                            View Details
                          </Link>
                          <Link href={`/app/green-taxonomy`} className="content-p">
                            Taxonomy Status
                          </Link>
                        </div>
                      }
                      placement="bottom"
                    >
                      <Image src={menu_dots} alt="Menu" height="20" />
                    </Popover>
                  </div>
                  <div className="sdg" style={{ marginBottom: "8px" }}>
                    <Tag color={getTaxonomyColor(project.taxonomyStatus)}>
                      {project.taxonomyStatus}
                    </Tag>
                    <Tag color={getESGStatusColor(project.esgStatus)}>
                      {project.esgStatus}
                    </Tag>
                  </div>
                  <div style={{ marginBottom: "4px", fontSize: "14px", color: "#666" }}>
                    <strong>{project.amount}</strong>
                  </div>
                  <div className="location">
                    <EnvironmentFilled />
                    <span className="locStyle">{project.location}</span>
                  </div>
                  <div style={{ marginTop: "4px", fontSize: "12px", color: "#888" }}>
                    {project.sector} • {project.projectId}
                  </div>
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default AllProgramme;
