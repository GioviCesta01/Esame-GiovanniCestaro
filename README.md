# ESAME
La startup ENDI vuole creare un software in cloud per la gestione dei consumi dei condomini con riscaldamento centralizzato.

Per fare questo, chiede di realizzare una piattaforma con la quale sia possibile, per ogni azienda termoidraulica, censire i condomini che ha in gestione.

In particolare, la piattaforma dovra permettere di inserire i condomini indicando le seguenti informazioni:
* Nome del condominio
* Foto
* Comune
* Provincia
* Indirizzo
* CAP
* Numero appartamenti
* Consumo complessivo dell'ultimo anno
* Gestione remota
* Tipo di contabilizzazione, con i seguenti valori possibili:
    * diretta
    * indiretta
* Tipologia sonda, con i seguenti valori possibili:
    * compatta
    * remota
* tipologia dispositivi:
    * ripartitori di calore
    * totalizzatore di calore
    * contatore di energia termica

Dovrà essere possibile vedere l'intera lista dei condomini creati, ordinati per data di creazione (dal più recente). Nella lista dei condomini, ogni elemento dovrà essere corredato dall'immagine inserita in fase di creazione.


# COME INSTALLARE IL PROGETTO
Client:
* npm install
* npm run serve

Server:
* modificare il file '.env' inserendo il nome del database (esame_giovannicestaro)
* composer update
* php artisan migrate
* php artisan serve

# VISUALIZZAZIONE PAGINE
* Per visualizzare la pagina home inserire /home all'interno dell'URL
* Per visualizzare la pagina create inserire /house/create all'interno dell'URL

