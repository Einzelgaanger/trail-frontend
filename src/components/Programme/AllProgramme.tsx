import { Row, Col, Popover, Tag } from "antd";
import Image from "next/image";
import Link from "next/link";
import { EnvironmentFilled } from "@ant-design/icons";
import menu_dots from "../../../public/assets/menu_dots.svg";
import trail_background_image from "../../../public/assets/trail_background_image.png";

// Consistent ESG Project Data (matching all modules) - Comprehensive Dataset
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
  {
    projectId: "PROJ-2024-007",
    name: "Ibadan Wind Energy Project",
    sector: "Renewable Energy",
    location: "Oyo State",
    taxonomyStatus: "Green",
    esgStatus: "Complete",
    amount: "₦2.2B",
  },
  {
    projectId: "PROJ-2024-008",
    name: "Benin City Water Supply Upgrade",
    sector: "Water & Sanitation",
    location: "Edo State",
    taxonomyStatus: "Green",
    esgStatus: "Complete",
    amount: "₦1.45B",
  },
  {
    projectId: "PROJ-2024-009",
    name: "Warri Refinery Modernization",
    sector: "Oil & Gas",
    location: "Delta State",
    taxonomyStatus: "Transition",
    esgStatus: "Incomplete",
    amount: "₦5.2B",
  },
  {
    projectId: "PROJ-2024-010",
    name: "Lagos BRT System Expansion",
    sector: "Transportation",
    location: "Lagos State",
    taxonomyStatus: "Green",
    esgStatus: "Complete",
    amount: "₦2.8B",
  },
  {
    projectId: "PROJ-2024-011",
    name: "Kano Gas Power Station",
    sector: "Energy",
    location: "Kano State",
    taxonomyStatus: "Transition",
    esgStatus: "Incomplete",
    amount: "₦3.5B",
  },
  {
    projectId: "PROJ-2024-012",
    name: "Port Harcourt Recycling Plant",
    sector: "Waste Management",
    location: "Rivers State",
    taxonomyStatus: "Green",
    esgStatus: "Complete",
    amount: "₦1.2B",
  },
  {
    projectId: "PROJ-2024-013",
    name: "Jos Solar Microgrid",
    sector: "Renewable Energy",
    location: "Plateau State",
    taxonomyStatus: "Green",
    esgStatus: "Complete",
    amount: "₦850M",
  },
  {
    projectId: "PROJ-2024-014",
    name: "Calabar Industrial Waste Treatment",
    sector: "Waste Management",
    location: "Cross River State",
    taxonomyStatus: "Green",
    esgStatus: "Complete",
    amount: "₦1.65B",
  },
  {
    projectId: "PROJ-2024-015",
    name: "Kaduna Oil Refinery Expansion",
    sector: "Oil & Gas",
    location: "Kaduna State",
    taxonomyStatus: "Not Green",
    esgStatus: "Incomplete",
    amount: "₦4.8B",
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
      <Row gutter={[24, 24]} className="program-section">
        {esgProjects.map((project) => (
          <Col xs={{ span: 24 }} sm={{ span: 12 }} lg={{ span: 8 }} key={project.projectId}>
            <div className="cardStyle">
              <div className="cardContainer">
                <div className="progImg">
                  <Image
                    src={trail_background_image}
                    alt="Project Image"
                    width={120}
                    height={120}
                    style={{ objectFit: "cover" }}
                  />
                  <div className="project-status-badge">
                    <Tag color={getTaxonomyColor(project.taxonomyStatus)} style={{ margin: 0, fontWeight: 500 }}>
                      {project.taxonomyStatus}
                    </Tag>
                  </div>
                </div>
                <div className="rightContent">
                  <div className="subRight1">
                    <div className="project-header">
                      <span className="project-id">{project.projectId}</span>
                      <h3 className="progName">{project.name}</h3>
                    </div>
                    <Popover
                      content={
                        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                          <Link href={`/app/projects-drilldown`} className="content-p">
                            View Details
                          </Link>
                          <Link href={`/app/green-taxonomy`} className="content-p">
                            Taxonomy Status
                          </Link>
                        </div>
                      }
                      placement="bottomRight"
                      trigger="click"
                    >
                      <div className="card-menu-btn">
                        <Image src={menu_dots} alt="Menu" height="18" width="18" />
                      </div>
                    </Popover>
                  </div>
                  
                  <div className="project-details">
                    <div className="detail-row">
                      <span className="detail-label">Sector</span>
                      <span className="detail-value">{project.sector}</span>
                    </div>
                    
                    <div className="detail-row">
                      <span className="detail-label">Location</span>
                      <div className="location">
                        <EnvironmentFilled style={{ fontSize: "12px", marginRight: "4px" }} />
                        <span className="locStyle">{project.location}</span>
                      </div>
                    </div>
                    
                    <div className="detail-row amount-row">
                      <span className="detail-label">Investment</span>
                      <span className="amount-value">{project.amount}</span>
                    </div>
                  </div>
                  
                  <div className="card-footer">
                    <Tag color={getESGStatusColor(project.esgStatus)} className="esg-status-tag">
                      ESG: {project.esgStatus}
                    </Tag>
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
