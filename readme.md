# Dokumentation für Backend/MongoDB Docker Hosting

# Einleitung
Dieses Repository enthält den Code für Backend/MongoDB Docker Hosting. Es handelt sich um eine Docker-Compose-Konfiguration, die eine Containerumgebung für eine MongoDB-Datenbank und einen Backend-Dienst erstellt. Diese Dokumentation bietet eine Schritt-für-Schritt-Anleitung zur Ausführung des Projekts und enthält auch Anpassungsmöglichkeiten und Problemlösungstipps.

# Voraussetzungen
Um das Projekt auszuführen, müssen die folgenden Voraussetzungen erfüllt sein:

- Docker auf dem Host-System installiert sein.
- Docker Compose auf dem Host-System installiert sein.

Projektinstallation Folgen Sie den unten genannten Schritten, um das Projekt zu installieren und auszuführen:

# 3.1 Repo Klonen
Klonen Sie das Repository auf Ihren Docker-Host und navigieren Sie in das Projektverzeichnis.

# 3.2 Umgebungsvariablen konfigurieren
Erstellen Sie eine .env-Datei im Projektverzeichnis und füllen Sie die erforderlichen Umgebungsvariablen aus. Diese Umgebungsvariablen sind notwendig, um die MongoDB-Datenbank und den Backend-Dienst zu konfigurieren. Beachten Sie, dass einige der Werte bereits im ".env.example"-Datei bereitgestellt werden.

# 3.3 Container starten
Starten Sie die Container mit dem Befehl "docker-compose up -d". Dieser Befehl erstellt und startet die Container basierend auf der Docker-Compose-Konfiguration.

# 3.4 Containerstatus überprüfen
Warten Sie, bis die Container gestartet wurden. Sie können den Status der Container überprüfen, indem Sie den Befehl "docker ps" ausführen. Stellen Sie sicher, dass sowohl MongoDB-Container als auch Backend-Dienst-Container ausgeführt werden.

# Projektverwendung
Sobald die Container gestartet wurden, können Sie auf den Backend-Dienst über die URL "http://localhost:3000" zugreifen. Überprüfen Sie, ob der Backend-Dienst fehlerfrei funktioniert.

# Beenden des Projekts
Um die Container zu stoppen und zu entfernen, verwenden Sie den Befehl "docker-compose down". Dieser Befehl stoppt und entfernt alle Container, die von der Docker-Compose-Konfiguration erstellt wurden.

# Anpassungsmöglichkeiten
Es gibt verschiedene Möglichkeiten, das Projekt an Ihre Anforderungen anzupassen:

# Importieren eigener Daten in die MongoDB-Datenbank:

- Kopieren Sie Ihre Daten in das entsprechende Verzeichnis im Projekt.
- Bearbeiten Sie die MongoDB-Konfiguration in der Docker-Compose-Datei, um auf das richtige Datenverzeichnis zu verweisen.
- Starten Sie die Container neu und überprüfen Sie, ob Ihre Daten in der MongoDB-Datenbank vorhanden sind.

Bearbeiten des Backend-Codes:

- Navigieren Sie zum Verzeichnis des Backend-Codes im Projekt.
- Bearbeiten Sie den Code nach Ihren Bedürfnissen.
- Starten Sie die Container neu und überprüfen Sie, ob die gewünschten Änderungen im Backend-Dienst wirksam sind.

Problemlösungstipps Wenn Sie Probleme beim Ausführen des Projekts haben, überprüfen Sie die folgenden Punkte:

- Überprüfen Sie die Docker- und Docker Compose-Dokumentation, um sicherzustellen, dass Ihre Installation und Konfiguration korrekt sind.
- Stellen Sie sicher, dass die Ports nicht blockiert sind, die vom Backend-Dienst und von der MongoDB-Datenbank verwendet werden.
- Überprüfen Sie die Protokolle der Container, um mögliche Fehler und Warnungen zu identifizieren.

# Fazit:
Dieses Backend/MongoDB Docker Hosting-Projekt bietet eine einfache und schnelle Möglichkeit, eine Containerumgebung für eine MongoDB-Datenbank und einen Backend-Dienst zu erstellen. Mit diesen Schritten können Sie das Projekt problemlos ausführen und nach Ihren Bedürfnissen anpassen. Bei Problemen stehen Ihnen verschiedene Problemlösungstipps zur Verfügung. Viel Erfolg bei der Verwendung dieses Projekts!