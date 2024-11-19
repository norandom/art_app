import React from 'react';
import styled from 'styled-components';

const TableContainer = styled.div`
  margin-top: 4rem;
  overflow-x: auto;
`;

const Title = styled.h3`
  font-size: 1.5rem;
  color: var(--accent-color);
  margin-bottom: 2rem;
  text-align: center;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: var(--monospace-box-background);
  font-family: 'SF Mono', monospace;
  font-size: 0.9rem;
`;

const Th = styled.th`
  padding: 1rem;
  text-align: left;
  border: 1px solid #e2e8f0;
  background: #f7fafc;
  color: var(--accent-color);
  font-weight: 600;
`;

const Td = styled.td`
  padding: 1rem;
  border: 1px solid #e2e8f0;
  vertical-align: top;
  line-height: 1.5;
`;

const CategoryHeader = styled(Th)`
  background: #edf2f7;
`;

interface SkillEntry {
  category: string;
  mainSkill: string;
  relatedSkills: string[];
  tools: string[];
}

const skillData: SkillEntry[] = [
  {
    category: "Security Architecture",
    mainSkill: "Enterprise Security Design",
    relatedSkills: ["Zero Trust Architecture", "Cloud Security", "API Security"],
    tools: ["AWS Security Hub", "Azure Security Center", "HashiCorp Vault"]
  },
  {
    category: "Security Architecture",
    mainSkill: "Security Controls",
    relatedSkills: ["Access Control", "Network Security", "Data Protection"],
    tools: ["IAM Solutions", "Firewalls", "Encryption Tools"]
  },
  {
    category: "Quantitative Analysis",
    mainSkill: "Risk Analytics",
    relatedSkills: ["Statistical Analysis", "Risk Modeling", "Threat Assessment"],
    tools: ["Python", "R", "Risk Management Frameworks"]
  },
  {
    category: "Quantitative Analysis",
    mainSkill: "Security Metrics",
    relatedSkills: ["KPI Development", "Performance Analysis", "ROI Analysis"],
    tools: ["Dashboarding Tools", "BI Platforms", "Custom Analytics"]
  },
  {
    category: "Technical Skills",
    mainSkill: "Infrastructure & Systems",
    relatedSkills: ["Linux/Unix", "Cloud Platforms", "Containerization"],
    tools: ["Bash", "Docker", "Kubernetes"]
  },
  {
    category: "Technical Skills",
    mainSkill: "Security Tools",
    relatedSkills: ["SIEM", "IDS/IPS", "Vulnerability Management"],
    tools: ["Splunk", "Snort", "Nessus"]
  }
];

const SkillTable: React.FC = () => {
  return (
    <TableContainer>
      <Title>Professional Expertise</Title>
      <Table>
        <thead>
          <tr>
            <Th>Domain</Th>
            <Th>Core Competency</Th>
            <Th>Related Skills</Th>
            <Th>Tools & Technologies</Th>
          </tr>
        </thead>
        <tbody>
          {skillData.map((entry, index) => (
            <tr key={index}>
              <Td>{entry.category}</Td>
              <Td>{entry.mainSkill}</Td>
              <Td>{entry.relatedSkills.join(", ")}</Td>
              <Td>{entry.tools.join(", ")}</Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  );
};

export default SkillTable;
