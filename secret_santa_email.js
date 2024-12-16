function sendSecretSantaEmails() {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = sheet.getDataRange().getValues();
    
    // Skip header row
    const participants = data.slice(1).map(row => ({
      name: row[0],
      email: row[1],
    }));
    
    const pairs = generatePairs(participants);
    
    const subject = "Your Secret Santa Assignment!";
    
    pairs.forEach(pair => {
      const giver = pair.giver;
      const receiver = pair.receiver;
      const message = `
        Hello ${giver.name},
        
        You have been chosen as the Secret Santa for: ${receiver.name}!
        
        Please purchase a gift worth 200 NOK and bring it with you on 24.12 when we meet.
      `;
      GmailApp.sendEmail(giver.email, subject, message);
    });
    
    SpreadsheetApp.getUi().alert("Emails have been sent!");
  }
  
  function generatePairs(participants) {
    const shuffled = [...participants];
    shuffleArray(shuffled);
  
    // Ensure no one gets themselves
    while (shuffled.some((p, i) => p.name === participants[i].name)) {
      shuffleArray(shuffled);
    }
    
    return participants.map((giver, i) => ({
      giver,
      receiver: shuffled[i],
    }));
  }
  
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  