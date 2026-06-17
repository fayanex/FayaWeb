// ---------------------------------------------------------------------------
// Fayanex contact form configuration
//
// Paste your Google Apps Script Web App URL below (it ends in /exec).
// See APPS_SCRIPT.gs for the script and SETUP.md for the 5-step guide.
//
// You can either hardcode it here, OR leave the placeholder and set the
// NEXT_PUBLIC_SHEET_ENDPOINT environment variable in Hostinger instead.
// ---------------------------------------------------------------------------

export const SHEET_ENDPOINT =
  process.env.NEXT_PUBLIC_SHEET_ENDPOINT ||
  'https://script.google.com/macros/s/AKfycbxOnUbrTJOWcUwTcKdtTgoXUkuzUTwIFeUUinyWNzvtxuK2BfL5R7dGpGzowm-76CJo-w/exec';
