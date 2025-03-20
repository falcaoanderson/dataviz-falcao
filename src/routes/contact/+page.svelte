<svelte:head>
    <title>Contacts</title>
</svelte:head>

<form action="mailto:anderson@mail.com" method="get">
    <label for="email">Email: <input id="email" type="email" name="text_email"> </label>
    <label for="subject">Subject: <input id="subject" type="text" name="text_subject"> </label>
    <label for="body">Body: <textarea id="body" name="text_message"></textarea> </label>
    <button type="submit">Send</button>
</form>