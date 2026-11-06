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
