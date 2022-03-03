English Version below (WIP)
#DEUTSCH
# Twine-Google-Sheet-API
Anleitung um eine Twine Story mit einem Google Spreadsheet zu koppeln. Erlaubt die Möglichkeit Variabeln online zu Synchronisieren zum lesen und schreiben. Mehrere Twine Stories können auf das gleiche Sheet zugreifen, was die Möglichkeit für Multiplayer eröffnet.

# Vorbereitung für das Google Spreadsheet (selbst erstellt)
Erstelle ein Google Sheet und entferne alle Zeilen bis auf eine. Klicke oben in der Optionsleiste auf "Erweiterungen/Apps Script" und kopiere den Inhalt der Datei "api.js" aus diesem Repository in das Apps Script. Im Script selbst muss nun noch die "const SHEETID" angepasst werden. Dafür muss ein Teil der Sheet URL rauskopiert werden und in die Variable eingefügt werden. Genauer steht es im Code selbst. 

Speichere das "code.gs" und klicke das "ausführen". Google wird nach Erlaubnis für den Zugriff fragen von einer Unbekannten Applikation. Diese muss erlaubt werden, damit der Zugriff via Twine klappt. Danach nochmal auf "ausführen" klicken. Jetzt sollte unten stehen, dass es erfolgreich war. 

Als nächstes muss die API Bereitgestellt werden. Dafür muss oben rechts auf "Bereitstellen" geklickt werden. Als Typ wird "Web App" ausgesucht. Eine Beschreibung kann hinzugefügt werden. Bei der Ausführung sich selbst wählen und die Web App für jeden (everyone) erlauben. 
Nun die Web-App URL kopieren. Dieser Link wird später in Twine eingefügt. 

# Vorbereitung für das Google Spreahsheet (kopieren)
https://docs.google.com/spreadsheets/d/1fvypvIrhu-QyDDBdDjqbIv14HgGKreBH30oV1sSJ0As/edit?usp=sharing 
Einfach den Link öffnen und die Tabelle duplizieren. 
Nun noch die Variable "const SHEETID" anpassen und die selben Schritte wie oben mit dem ausführen und bereitstellen machen.

# Vorbereitung in Twine
Die Twine Vorlage runterladen und in dem Java Script die Ziel Adresse anpassen (destination Link)
Wenn jetzt die Twine Story gestartet wird, sollte eine Neue Zeile geschrieben werden und die Punkte aktualisiert werden. 
Nun kann die Story so angepasst werden wie die Aktualisierung der Punkte benötigt wird.

#ENGLISCH WIP
# Twine-Google-Sheet-API
Manual for connecting a google sheet to a Twine Story allowing to show variables of different instances online

# Preparation for Google Sheet (from scratch)
Create a new google sheet and delete each line so that only one remains at the end. Go to "Extensions/Apps Script" and paste the file "api.js" into the editor. Save the "code.gs" file and click on "run". Google is going to ask for permissions that you have to grant. After that you have to click "run" again. 
To deploy your API click "Deploy" and select "Web App" as your Type. Give your deployment any description and execute it as yourself. Grant access to anyone. 
Copy the Web-App URL shown in the deployment window. You will need it in Twine. 

# Preparation for Google Sheet (copy Sheet)
You can also duplicate this google sheet https://docs.google.com/spreadsheets/d/1fvypvIrhu-QyDDBdDjqbIv14HgGKreBH30oV1sSJ0As/edit?usp=sharing 
Click run and deploy as described above.

# Preparation for Twine
Download the Twine Story and change the destination link inside the Twine-Javascript. 

# Test your story
Try it out and check your sheet. 
