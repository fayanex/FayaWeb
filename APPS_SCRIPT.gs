/**
 * Fayanex contact form -> Google Sheet
 *
 * Setup:
 *  1. Create a Google Sheet. In row 1, add headers:
 *     Timestamp | Name | Email | Company | Message
 *  2. In the sheet: Extensions -> Apps Script. Delete any code, paste this file.
 *  3. Deploy -> New deployment -> type "Web app".
 *       Execute as: Me
 *       Who has access: Anyone
 *     Authorize when prompted, then copy the Web app URL (ends in /exec).
 *  4. Paste that URL into src/config.js (or set NEXT_PUBLIC_SHEET_ENDPOINT in Hostinger).
 *
 * To update later: Manage deployments -> edit -> Version: New version
 * (keeps the same /exec URL).
 */

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
    sheet.appendRow([
      new Date(),                    // Timestamp
      e.parameter.name || '',
      e.parameter.email || '',
      e.parameter.company || '',
      e.parameter.message || ''
    ]);

    // Optional: email a copy on each submission. Remove this block if not wanted.
    try {
      MailApp.sendEmail(
        'contact@fayanex.com',
        'New enquiry from ' + (e.parameter.name || 'website'),
        'Name: ' + (e.parameter.name || '') + '\n' +
        'Email: ' + (e.parameter.email || '') + '\n' +
        'Company: ' + (e.parameter.company || '') + '\n\n' +
        (e.parameter.message || '')
      );
    } catch (mailErr) {
      // ignore mail errors so the row still saves
    }

    return ContentService.createTextOutput('ok');
  } catch (err) {
    return ContentService.createTextOutput('error: ' + err);
  }
}

// Lets you confirm the endpoint is live by opening the /exec URL in a browser.
function doGet() {
  return ContentService.createTextOutput('Fayanex form endpoint is live.');
}
