
import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    id: "resolute-fortress",
    name: "Resolute Fortress",
    category: "CYBERSECURITY",
    subtitle: "Cybersecurity Audit & Risk Management",
    description:
      "A multi-tenant cybersecurity platform designed to help organisations manage security audits, assess risks, track vulnerabilities and monitor remediation activities.",
    preview: "fortress",
    technologies: [
      "React",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "Express",
      "Python",
      "Django",
      "PostgreSQL",
    ],
    modules: [
      {
        title: "Audit Management",
        description:
          "Audit engagement workflows, workpapers, questionnaires and evidence management.",
      },
      {
        title: "Security Assessment",
        description:
          "Security assessment workflows and attack graph visualisation.",
      },
      {
        title: "Vulnerability Management",
        description:
          "Vulnerability tracking, severity-based views and security incident workflows.",
      },
      {
        title: "AI-assisted Findings",
        description:
          "AI-generated audit findings, issue creation and follow-up workflows.",
      },
      {
        title: "Action Plans & Tasks",
        description:
          "Issue-to-task mapping, assignments, approvals and remediation tracking.",
      },
      {
        title: "Insights & Reporting",
        description:
          "Security dashboards, risk insights, report generation and PDF exports.",
      },
    ],
    contributions: [
      "Frontend development using React, TypeScript and JavaScript.",
      "Backend API development and integration using Node.js, Express and Django.",
      "PostgreSQL database operations and multi-tenant architecture work.",
      "Development of audit, evidence, vulnerability and remediation workflows.",
      "Dashboard, reporting and PDF export improvements.",
    ],
    architecture:
      "A multi-tenant SaaS architecture using PostgreSQL, with tenant-specific database connections and frontend-to-backend API integrations.",
  },
  {
    id: "resolute-compass",
    name: "Resolute Compass",
    category: "INSURANCE TECHNOLOGY",
    subtitle: "Insurance Provider & Lead Management Platform",
    description:
      "An insurance technology platform supporting provider-side workflows, insurance applications, lead management and client assessment processes.",
    preview: "compass",
    technologies: [
      "React",
      "JavaScript",
      "Python",
      "Django",
      "PostgreSQL",
      "REST APIs",
      "Clerk",
    ],
    modules: [
      {
        title: "Provider Portal",
        description:
          "Provider-facing portal workflows, authentication and provider-specific access.",
      },
      {
        title: "Lead Management",
        description:
          "Lead listing, lead review and provider-side lead handling workflows.",
      },
      {
        title: "Insurance Applications",
        description:
          "Insurance application review and processing workflows connecting client applications with providers.",
      },
      {
        title: "Client Assessments",
        description:
          "Dedicated client-side workflows for KYC, background checks and dark web scanning.",
      },
    ],
    contributions: [
      "Frontend development and provider portal UI improvements.",
      "Provider authentication and API integration.",
      "Lead management and insurance application workflows.",
      "Backend API and database model changes using Django and PostgreSQL.",
      "Development of dedicated pages for provider and client workflows.",
    ],
    architecture:
      "A React frontend integrated with Django APIs, PostgreSQL data models and authentication workflows, with provider-specific data handling.",
  },
];
