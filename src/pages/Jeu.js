import React from 'react';

const SendMessageForm = () => {
  const handleSendSMS = () => {
    const apiKey = '8BLWa8FuuYuaiZKAbVCWdHKeWCXuzSb93URCCRlysawj1jxZfCYuKM3QzufRPzTi';
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        to: "+21628896143", // Numéro de téléphone au format international
        body: "Ceci est le corps du message." // Remplacez "Ceci est le corps du message." par votre message réel
      })
    };

    fetch('https://textflow.me/api/send-code', requestOptions)
      .then(response => response.json())
      .then(data => {
        console.log('SMS sent successfully:', data);
        // Mettez à jour l'état ou effectuez toute autre action en cas de succès
      })
      .catch(error => {
        console.error('Failed to send SMS:', error);
        // Gérez l'erreur, par exemple en affichant un message à l'utilisateur
      });
  };

  return (
    <div>
      <button onClick={handleSendSMS}>Send SMS</button>
    </div>
  );
};

export default SendMessageForm;
