# Twine-Google-Sheet-API
Manual for connecting a google sheet to a Twine Story allowing to show variables of different instances online

# Preparation for Google Sheet
Create a new google sheet and delete each line so that only one remains at the end. Go to "Extensions/Apps Script" and paste the file "api.js" into the editor. Save the "code.gs" file and click on "run". Google is going to ask for permissions that you have to grant. After that you have to click "run" again. 
To deploy your API click "Deploy" and select "Web App" as your Type. Give your deployment any description and execute it as yourself. Grant access to anyone. 
Copy the Web-App URL shown in the deployment window. You will need it in Twine. 

# Preparation for Twine
Download the Twine Story and change the destination link inside the Twine-Javascript. 

# Test your story
Try it out and check your sheet. 
