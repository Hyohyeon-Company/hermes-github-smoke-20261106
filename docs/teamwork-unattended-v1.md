# teamwork-unattended-20261107-v1 — Unattended Trial Record

This document records the first unattended end-to-end trial of the team
delivery loop (`teamwork-unattended-20261107-v1`, step 1 of 1 for this PR).

## Scope

- Add exactly one new documentation file on top of current `main`.
- Open a pull request with the Dev App and observe the repository's
  `doc-check` CI check run on the PR head.
- No application code, deployment, permission or branch-protection changes;
  merging happens in a later authorized step, not in this PR's own task.

## Evidence

- Executor: `dev-hyohyeon` GitHub App (profile `team-backend`, dev role).
- All GitHub calls go through the profile-bound App installation; no personal
  `gh` credentials are used.
- CI observation and the machine-readable record live in
  `artifacts/operations/teamwork-unattended-20261107-v1/pr-created.json`
  in the team control workspace.
