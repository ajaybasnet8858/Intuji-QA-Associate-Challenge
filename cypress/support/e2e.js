import './commands';
import { addMatchImageSnapshotCommand } from "cypress-image-snapshot/command";
import 'cypress-xpath';

addMatchImageSnapshotCommand({
  failureThreshold: 0.03,
  failureThresholdType: "percent",
  customSnapshotsDir: "cypress/snapshots",
  customDiffDir: "cypress/snapshots/diff"
});

Cypress.on('uncaught:exception', (err, runnable) => {
  return false; 
});