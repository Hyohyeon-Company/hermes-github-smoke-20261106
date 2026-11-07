# teamwork-unattended-20261107-v2 — Unattended Trial Record

This document records the second unattended end-to-end trial of the team
delivery loop (`teamwork-unattended-20261107-v2`). It extends the v1 trial
with an explicit same-card review contract and a fresh evidence directory.

## Scope

- Add exactly one new documentation file on top of current `main`.
- Flow: domain Issue -> branch `docs/teamwork-unattended-v2` -> PR (base
  `main`) -> observe the `doc-check` check run on the PR head.
- The owning App of the check run is measured from the check-runs API
  response (`app.id`), never assumed from prior trials.
- No application code, deployment, permission or branch-protection changes;
  merging happens in a later authorized merge-only step, not in this task.

## Procedure

1. Create the trial Issue marked `teamwork-unattended-20261107-v2`.
2. Branch `docs/teamwork-unattended-v2` from the latest `main` head.
3. Commit this single document and open the pull request.
4. Poll the head commit's check runs until `doc-check` completes; record the
   owning App id, conclusion and run URL.

## Review contract summary (same-card review)

- The Reviewer inspects the real diff and submits an `APPROVE` review on the
  latest full head via the profile-bound App client `request()` path.
- An identical-argument retry reuses the existing review (HTTP 200 with
  `x-team-review-reused`, same review id, exactly one GitHub approval).
- Native card completion requires a structured result carrying its own
  output artifact path; pinned input artifacts are never overwritten.

## Evidence

- Executor: `dev-hyohyeon` GitHub App (profile `team-backend`, dev role).
- All GitHub calls go through the profile-bound App installation; no personal
  `gh` credentials are used.
- The machine-readable record lives in
  `artifacts/operations/teamwork-unattended-20261107-v2/pr.json` in the team
  control workspace.
