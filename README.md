# Hermes GitHub Smoke Test — 2026-11-06

## Purpose
Verify the team's GitHub App collaboration flow (issue -> branch -> pull request -> review -> merge) on a disposable public repository.

## Test Scope
Documentation-only changes. No product code, no secrets, no deployment, no self-hosted runners.

## Acceptance Criteria
Tracked in `acceptance.json`. CI job `doc-check` (Node 24) validates every criterion on every push and pull request.

## Roles
- Leader App: repository bootstrap and branch protection
- Dev App: issues, branches, pull requests, merge
- Reviewer App: formal code review


## Review Trail

Every change to this documentation-only repository lands through the Issue -> branch -> pull request -> independent review flow described above. The `doc-check` check on this pull request validates all criteria in `acceptance.json`, including AC-5 for this section, before protected `main` accepts the change. Merging without the required review approval is expected to be blocked by branch protection.
