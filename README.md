# **Google Apps Script Secret Santa Mailer**

A Google Apps Script to automate the Secret Santa process by assigning participants and sending personalized emails with their Secret Santa assignments.

## **Features**
- **Automatically pairs** participants without assigning someone to themselves.
- Sends **personalized emails** to each participant with their Secret Santa assignment.
- Simple integration with **Google Sheets** and **Gmail**.

## **How It Works**
1. **Set Up a Google Sheet**:
   - Create a Google Sheet with two columns: **Name** and **Email**.
   - Populate the sheet with participant details.

2. **Add the Script**:
   - Open the **Google Apps Script** editor from the sheet (**Extensions → Apps Script**).
   - Copy and paste this script into the editor.

3. **Run the Script**:
   - The script shuffles the participants, assigns pairs, and emails the assignments.
   - Participants receive emails like:
     ```
     Hello Lava,
     You have been chosen as the Secret Santa for Morris!
     Please purchase a gift worth 200 NOK and bring it with you on 24.12 when we meet.
     ```

## **Requirements**
- A **Google Account** with access to Gmail and Google Sheets.
- Participants' **names and emails** are stored in a Google Sheet.

## **Installation**
1. Open the **Google Sheet**.
2. Go to **Extensions → Apps Script**.
3. Paste this script and save it.
4. Run the `sendSecretSantaEmails` function and grant permissions.

## **Customization**
- Update the **email message content** directly in the script to reflect your event details.
- Adjust the **price limit**, **meeting date**, or **language** as needed.

## **Example Use Case**
Planning a **family or friends' Secret Santa** can be tricky, especially when keeping the assignments anonymous. This script simplifies the process by pairing participants and sending personalized email notifications, making your holiday preparations **smooth and stress-free**.


