---
sidebar_position: 3
---

# GitHub Advanced Security

All information related to features of GHAS.

[Course video](https://www.youtube.com/watch?v=i740xlsqxEM)

- [www.exampro.com/ghas](http://www.exampro.com/ghas)
- GitHub Certifications
  - **does not validate programming, technical diagramming, code management**.
- Recommended to study **1–2 hours** a day for 14 days
- GitHub does not share the weighting of each domain.
- The exam of questions **in 7 domains**:
  - **Domain 1**: Describe GHAS security features and functionality
  - **Domain 2**: Configure and use secret scanning
  - **Domain 3**: Configure and use dependency management
  - **Domain 4**: Configure and use code scanning
  - **Domain 5**: Use code scanning with CodeQL
  - **Domain 6**: Describe GHAS best practices
  - **Domain 7**: Configure GHAS tools in GitHub Enterprise
- GitHub delivers exams via:
  - PSI Online (online exam system)
  - PSI network of test centers
- Format of Questions
  - Multiple choices
  - Multiple answers
- 15 outscored questions, that can be easy or very difficult.
Remember, these questions will not change the score.
- Duration of 2 hours - 1.6 minutes per question

## GitHub Advance Security

Refers to understanding how to use the security features.
Three services are found under the Security tab:

### Dependabot

- Identifies **security vulnerabilities in open-source libraries**
- Scan dependencies and raise alerts
- Take action from GitHub on vulnerabilities

Dependabot uses dependency graph to scan and alert
on any insecure dependencies on the default branch of any GitHub repo.

Dependabot scan:

- GitHub Action workflow files
- Scan packages supported by Dependency graph
- Can alert based on GitHub Advisory Database entries

Dependabot cannot:

- Scan archived repos
- Cannot generate alerts for malware

### Secret Scanning

- Follow an output message as example when a commit attempt occur with a secret leaked:

```bash
Total 5 (delta 3), reused 0 (delta 0), pack-reused 0 (from 0)
remote: error: GH013: Repository rule violations found for refs/heads/main.
remote: 
remote: - GITHUB PUSH PROTECTION
remote:   —————————————————————————————————————————
remote:     Resolve the following violations before pushing again
remote: 
remote:     - Push cannot contain secrets
remote: 
remote:     
remote:      (?) Learn how to resolve a blocked push
remote:      https://docs.github.com/code-security/secret-scanning/working-with-secret-scanning-and-push-protection/working-with-push-protection-from-the-command-line#resolving-a-blocked-push
remote:     
remote:     
remote:       —— GitHub Personal Access Token ——————————————————————
remote:     
remote:        (?) To push, remove secret from commit(s) or follow this URL to allow the secret.
remote:     
remote: 
remote: 
```

- Secrets stored in **repositories** like passwords, access tokens, etc.
- Scan secrets and raise alerts
- Take action from GitHub

Full list **of current secret patterns** supported by Secret Scanning - [Link](https://docs.github.com/en/code-security/secret-scanning/introduction/supported-secret-scanning-patterns#supported-secrets)

#### Push Protection

- Scans for secrets in **every commit**
- Prevents secrets from appearing into the repository in the first place.

#### Continuous Scan

- Detect and alert on any **existent secrets**
- Helps to detect secrets that are already in the repository.
It **does not prevent any new secrets from being added**.

#### Secret Scanning Partner Program

GitHub Partner Program enables product companies to partner with GitHub to be notified if any of their secrets are being leaked on a public or internal GitHub repository. Partners provide **regular expression** via a verification endpoint to detect possible secrets. Follow some of the partners available:

- NPM
- Canva
- Postman
- Terraform
- Atlassian

### Code Scanning

- Identifies **security vulnerabilities in the code**
- Scan and raise alerts on vulnerabilities
- Use GitHub Actions workflow and CodeQL

GHAS is integrated within GitHub and can check for:

- Secrets in code
- Vulnerability in login of the code
- And vulnerable open-source libraries being used by the code

## Enable GHAS

You can enable GHAS in four ways:

1. Personal/individual
    1. Account settings > Code security and analysis
2. Organization
    1. Organization > Settings > Security > Secrets and variables
3. Repository level
    1. Settings > Security
4. Pro or Enterprise plan level

## Security Vulnerability

Potential risk to an organization that can be exploited by a malicious attacker to misuse or negatively impact the organization

- Web-based security vulnerabilities as XSS, CSRF, SSRF
- Open-source vulnerabilities
- Stored secrets
- Cloud misconfiguration
- Zero day
- Virus, malware, ransomware

## GitHub Advisory Database

- [Reference](https://github.com/advisories)

A database maintained by GitHub with a list of security vulnerabilities of CVE and GitHub own research.

## Open Source in GitHub

Unmaintained open source libraries and packages with security vulnerabilities are present everywhere on the internet.

In GitHub, the **Dependency graph** is a good place to see what open-source dependencies are in use in your project.

To access the Dependency graph of your repository, [example](https://github.com/repo_name/second-brain/network/dependencies)

## References

- [The state of the Octoverse - 2024](https://github.blog/news-insights/octoverse/octoverse-2024/)
