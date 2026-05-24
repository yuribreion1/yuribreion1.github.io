---
sidebar_position: 3
---

# GitHub Advanced Security

## GitHub Advanced Security course - Part 1

### Introduction to GitHub Advanced Security

**GitHub Advanced Security** (GHAS) is an application solution that helps developers secure their code and manage risks without disrupting their workflow.
GHAS includes capabilities now offered as two products: **GitHub Secret Protection** and **GitHub Code Security**.

**Secret scanning** helps prevent the accidential exposure of sensitive information.
The feature is available for public repositories for free, and can also be enable for private repositories with GHAS license.

**Code scanning** analyzes the source code for security vulnerabilities and code errors. Employing static analysis techniques to identify potential issues, like SQL injection or cross-site scripting.

**Dependabot** is an automated dependency management tool, responsible for keeping project dependencies up-to-date.
Dependabot works closely with dependency graph to determine which dependencies are in use and cross-reference them against GitHub **Advisory Database** to detect vulnerabilities.

The Dependency graph identifies all upstream dependencies and public downstreams dependant of a repository or package, that includes:
- information on direct and transitive dependencies
- dependency graph is automatically updated when you push a commit to GitHub, or adds a supported manifest or lock file to the default branch
- the dependency graph can be exported as SPDX compatible SBOM file
- code scanning and dependabot alerts can be modified by anyone with the **WRITE** repository role
- secret scanning alerts can be modified by anyone with the **ADMIN** repository role
- Anyone or team can granted access to see and modify all alerts on a repository by modifying the repo's "Access to alerts" settings

#### Test

1. What is GitHub Advanced Security?
- An application security solution that empowers developers
2. How does Dependabot use the dependency graph in GHAS?
- To cross-reference dependency data with the GitHub Advisory Database
3. How does GHAS help integrate security into each step of SDLC?
- By automating security checks with every pull request, surfacing issues in the context of the development workflow
4. How does code scanning contributes to the security of a software development project?
- By identifying and addressing security vulnerabilities in the codebase
5. What role does the dependency graph play in GHAS?
- It identifies dependencies and powers features like Dependabot and dependency review

### Configure Dependabot security updates on GitHub repo

**The dependency graph** is a summary of the manifest and lock file stores in a repository. This files contains metadata about your project, and presents two types of dependencies:
- **Direct dependencies** explicitly defined in a manifest file
- **Indirect dependencies**, as known as transitive dependencies, which are dependencies used by packages that are dependencies of your project

The GitHub Advisory Database is a security vulnerability database inclusive of Common Vulnerabilities and Exposures (CWE) and GitHub Security Advisors from the world of open source software.
Each vulnerability contains information of description, severity, and affected package

A Software Bill of Materials (SBOM) is a formal, machine readable inventory, of a project's dependencies and associated information (such as versions, package identifiers, and licenses).
In GitHub, the SBOM can be exported via the UI or by using REST API

Grouped Security Updates enable the group sets of dependencies together in a single pull request. Dependabot won't group dependencies from different package ecosystem together.
To use that, these other features have to be enabled:
- Dependency graph
- Dependabot alerts
- Dependabot security updates