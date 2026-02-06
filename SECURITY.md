# Security Policy

Opsyx Technologies takes the security of our systems and our clients' trust seriously. This document outlines our security practices, vulnerability reporting process, and coordinated disclosure policy.

## Supported Versions

| Version | Supported |
|---------|-----------|
| Latest on `main` | Yes |
| All other branches | No |

## Reporting a Vulnerability

If you discover a security vulnerability in this project, please report it responsibly through one of the following channels.

**Primary:** info@opsyxtechnologies.com

**Alternative:** Open a private security advisory via [GitHub Security Advisories](https://github.com/OpsyxTechnologies/opsyx-site/security/advisories/new)

### What to Include

When submitting a report, please provide as much of the following as possible:

A clear description of the vulnerability and its potential impact. Step-by-step instructions or a proof of concept to reproduce the issue. The affected component, file, or endpoint. Your assessment of severity using CVSS v3.1 or a qualitative rating (Critical, High, Medium, Low). Any suggested remediation or mitigation steps. Your preferred contact information for follow-up.

### What to Expect

**Within 48 hours:** We will acknowledge receipt of your report and assign a tracking identifier.

**Within 5 business days:** We will provide an initial assessment, confirm whether the vulnerability is accepted or requires additional information, and communicate an estimated remediation timeline.

**Within 30 days:** For confirmed vulnerabilities, we will develop, test, and deploy a fix. Complex issues may require additional time, which will be communicated transparently.

**Upon resolution:** We will notify the reporter, credit them in the advisory if desired, and publish a security advisory through GitHub.

## Coordinated Disclosure Policy

We follow coordinated disclosure practices aligned with industry standards.

We request that reporters allow us a reasonable remediation window before any public disclosure. We will work collaboratively with reporters on disclosure timing and provide credit to reporters in published advisories unless anonymity is requested. We will not pursue legal action against researchers who act in good faith and comply with this policy.

## Safe Harbor

Opsyx Technologies considers security research conducted in accordance with this policy to be authorized conduct. We will not initiate legal action against researchers who discover and report vulnerabilities in good faith, make reasonable efforts to avoid privacy violations and data destruction, do not exploit vulnerabilities beyond what is necessary to demonstrate the issue, and do not access, modify, or exfiltrate data belonging to other users.

## Security Controls

### Source Code and CI/CD

Branch protection is enforced on `main` requiring passing CI builds and pull request review before merge. The GitHub Actions deployment pipeline operates with least-privilege permissions scoped to pages deployment only. Dependency vulnerabilities are monitored through npm audit and patched promptly upon disclosure. Third-party GitHub Actions are pinned to specific versions to prevent supply chain attacks.

### Application Security

The production site is served over HTTPS with SSL/TLS enforced through GitHub Pages. Content Security Policy headers are configured to mitigate cross-site scripting and injection attacks. The application does not collect, process, or store personally identifiable information. Static site architecture minimizes the attack surface by eliminating server-side processing.

### Monitoring and Response

Deployment logs are retained through GitHub Actions for audit purposes. Repository activity is monitored through GitHub's built-in audit log. Security advisories from upstream dependencies are reviewed and addressed on a rolling basis.

## Out of Scope

The following are not considered vulnerabilities under this policy: denial of service attacks against opsyxtechnologies.com, social engineering or phishing attempts targeting Opsyx Technologies personnel, vulnerabilities in third-party services or platforms not maintained by Opsyx Technologies, reports generated solely by automated scanning tools without demonstrated exploitability, and issues related to browser extensions or client-side software outside our control.

## Compliance Alignment

Opsyx Technologies operates as a Service-Disabled Veteran-Owned Small Business (SDVOSB). Our security practices are informed by NIST Cybersecurity Framework (CSF) 2.0, NIST SP 800-53 security controls where applicable, and OWASP Application Security Verification Standard (ASVS) for web application security.

## Contact

**Security Reports:** info@opsyxtechnologies.com

**General Inquiries:** info@opsyxtechnologies.com

**Website:** [opsyxtechnologies.com](https://opsyxtechnologies.com)

This policy is reviewed and updated as our security posture evolves. Last updated February 2026.
