# Quiz VLAN e Subnetting - 40 Domande a Risposta Multipla

## Istruzioni
Per ogni domanda, seleziona l'unica risposta corretta tra le quattro opzioni disponibili.
Livello di difficoltà: Medio/Alto

---

## Sezione 1: Indirizzamento IP e Subnetting Base

### Domanda 1
Qual è il range di indirizzi privati della classe B secondo RFC 1918?

- A) 10.0.0.0 - 10.255.255.255
- B) 172.16.0.0 - 172.31.255.255 (Corretta)
- C) 192.168.0.0 - 192.168.255.255
- D) 169.254.0.0 - 169.254.255.255

### Domanda 2
Un indirizzo IP con subnet mask /27 quanti bit dedica alla parte host?

- A) 3 bit
- B) 4 bit
- C) 5 bit (Corretta)
- D) 6 bit

### Domanda 3
Quanti indirizzi IP utilizzabili sono disponibili in una subnet /28?

- A) 16
- B) 14 (Corretta)
- C) 12
- D) 30

### Domanda 4
Data la rete 192.168.10.0/24, quale sarà l'indirizzo di broadcast della terza subnet se si applica FLSM con /26?

- A) 192.168.10.127
- B) 192.168.10.191 (Corretta)
- C) 192.168.10.255
- D) 192.168.10.63

### Domanda 5
Quale delle seguenti subnet mask è valida?

- A) 255.255.192.128
- B) 255.255.240.0 (Corretta)
- C) 255.255.255.130
- D) 255.255.128.192

---

## Sezione 2: FLSM (Fixed Length Subnet Mask)

### Domanda 6
Utilizzando FLSM, se si deve suddividere la rete 10.0.0.0/8 in 256 subnet di uguale dimensione, quale sarà la nuova subnet mask?

- A) /14
- B) /15
- C) /16 (Corretta)
- D) /17

### Domanda 7
Qual è il principale svantaggio di FLSM rispetto a VLSM?

- A) Maggiore complessità di configurazione
- B) Spreco di indirizzi IP quando le subnet hanno esigenze diverse (Corretta)
- C) Impossibilità di usare il routing dinamico
- D) Incompatibilità con i protocolli moderni

### Domanda 8
Con FLSM, dividendo 172.16.0.0/16 in 8 subnet uguali, quanti host utilizzabili avrà ciascuna subnet?

- A) 8190 (Corretta)
- B) 8192
- C) 4094
- D) 2046

### Domanda 9
In uno scenario FLSM con rete 192.168.0.0/24 divisa in 4 subnet, qual è l'indirizzo del primo host della seconda subnet?

- A) 192.168.0.65 (Corretta)
- B) 192.168.0.64
- C) 192.168.0.33
- D) 192.168.0.129

### Domanda 10
Se si necessita di almeno 500 host per subnet utilizzando FLSM, qual è la subnet mask minima da utilizzare?

- A) /22
- B) /23 (Corretta)
- C) /24
- D) /25

---

## Sezione 3: VLSM (Variable Length Subnet Mask)

### Domanda 11
Qual è il vantaggio principale di VLSM rispetto a FLSM?

- A) Configurazione più semplice
- B) Allocazione ottimizzata degli indirizzi in base alle reali esigenze (Corretta)
- C) Maggiore sicurezza intrinseca
- D) Compatibilità con tutti i router legacy

### Domanda 12
Applicando VLSM alla rete 10.10.0.0/16, quale subnet mask è più appropriata per un collegamento point-to-point tra due router?

- A) /28
- B) /29
- C) /30 (Corretta)
- D) /27

### Domanda 13
In VLSM, se una subnet necessita di 100 host, quale subnet mask deve essere utilizzata per minimizzare lo spreco?

- A) /24
- B) /25 (Corretta)
- C) /26
- D) /27

### Domanda 14
Quale protocollo di routing NON supporta VLSM?

- A) OSPF
- B) EIGRP
- C) RIPv1 (Corretta)
- D) RIPv2

### Domanda 15
Quando si pianifica VLSM, quale subnet deve essere allocata per prima?

- A) La subnet più piccola
- B) La subnet con meno host
- C) La subnet più grande (Corretta)
- D) La subnet del management

### Domanda 16
Data la rete 192.168.1.0/24 con VLSM, se la prima subnet è 192.168.1.0/25 (128 host), qual è l'indirizzo di rete della successiva subnet se necessita di 60 host?

- A) 192.168.1.128/26 (Corretta)
- B) 192.168.1.64/26
- C) 192.168.1.192/26
- D) 192.168.1.128/25

---

## Sezione 4: Concetti VLAN

### Domanda 17
A quale livello del modello OSI operano le VLAN?

- A) Livello 1 (Fisico)
- B) Livello 2 (Data Link) (Corretta)
- C) Livello 3 (Network)
- D) Livello 4 (Transport)

### Domanda 18
Qual è la dimensione del tag 802.1Q aggiunto al frame Ethernet?

- A) 2 byte
- B) 4 byte (Corretta)
- C) 8 byte
- D) 12 byte

### Domanda 19
Quante VLAN possono essere identificate con lo standard 802.1Q?

- A) 256
- B) 1024
- C) 4094 (Corretta)
- D) 65536

### Domanda 20
Qual è la funzione principale di una porta trunk?

- A) Connettere dispositivi finali alla rete
- B) Trasportare traffico di multiple VLAN tra switch (Corretta)
- C) Fornire ridondanza al collegamento
- D) Bloccare il traffico broadcast

### Domanda 21
Perché è una best practice non utilizzare la VLAN 1 per il traffico utente?

- A) Non supporta il tagging 802.1Q
- B) È la VLAN nativa di default e presenta rischi di sicurezza (Corretta)
- C) Ha prestazioni inferiori
- D) Non può essere ruotata

### Domanda 22
Cosa succede al traffico della Native VLAN su un trunk 802.1Q?

- A) Viene scartato
- B) Viene inviato con doppio tag
- C) Viene inviato senza tag (Corretta)
- D) Viene criptato

### Domanda 23
Quale campo del tag 802.1Q contiene l'identificativo della VLAN?

- A) TPID (Tag Protocol Identifier)
- B) PCP (Priority Code Point)
- C) DEI (Drop Eligible Indicator)
- D) VID (VLAN Identifier) (Corretta)

---

## Sezione 5: Inter-VLAN Routing

### Domanda 24
Cos'è il "Router-on-a-Stick"?

- A) Un router con una sola interfaccia fisica che utilizza subinterface per l'inter-VLAN routing (Corretta)
- B) Un router connesso con un solo cavo al core switch
- C) Una configurazione di failover tra router
- D) Un router dedicato esclusivamente al management

### Domanda 25
Qual è il vantaggio principale delle SVI (Switch Virtual Interface) rispetto al Router-on-a-Stick?

- A) Costo inferiore
- B) Configurazione più semplice
- C) Maggiori prestazioni grazie al routing hardware (Corretta)
- D) Supporto per più VLAN

### Domanda 26
In una configurazione Router-on-a-Stick, l'interfaccia fisica del router deve essere configurata come:

- A) Access port
- B) Trunk port (Corretta)
- C) Hybrid port
- D) Management port

### Domanda 27
Quale comando Cisco crea una subinterface per la VLAN 100 sull'interfaccia GigabitEthernet0/1?

- A) interface GigabitEthernet0/1 vlan 100
- B) interface GigabitEthernet0/1.100 (Corretta)
- C) interface vlan 100 GigabitEthernet0/1
- D) vlan 100 interface GigabitEthernet0/1

---

## Sezione 6: VLAN vs Subnetting

### Domanda 28
Quale affermazione descrive correttamente la differenza tra VLAN e Subnet?

- A) Le VLAN operano a Layer 3, le Subnet a Layer 2
- B) Le VLAN segmentano il dominio di broadcast a Layer 2, le Subnet a Layer 3 (Corretta)
- C) Le VLAN e le Subnet sono la stessa cosa
- D) Le Subnet non richiedono configurazione sui dispositivi di rete

### Domanda 29
Per far comunicare due host in VLAN diverse sullo stesso switch è necessario:

- A) Nessuna configurazione aggiuntiva
- B) Solo una porta trunk
- C) Un dispositivo di routing Layer 3 (Corretta)
- D) Un hub esterno

### Domanda 30
Quale tecnologia è più efficace per contenere un attacco broadcast storm?

- A) Solo Subnetting
- B) Solo VLAN (Corretta)
- C) Solo Firewall
- D) Solo ACL

### Domanda 31
In un'architettura enterprise, quale combinazione è considerata best practice?

- A) Una VLAN per tutti gli utenti, subnet multiple
- B) Multiple VLAN con una subnet associata a ciascuna VLAN (Corretta)
- C) Una subnet per tutti, VLAN multiple
- D) Nessuna VLAN, solo subnet

---

## Sezione 7: Sicurezza e Best Practice

### Domanda 32
Quale attacco sfrutta il Double Tagging per saltare da una VLAN all'altra?

- A) ARP Spoofing
- B) VLAN Hopping (Corretta)
- C) MAC Flooding
- D) DHCP Starvation

### Domanda 33
Come si può mitigare l'attacco VLAN Hopping tramite Double Tagging?

- A) Abilitare il port security
- B) Cambiare la Native VLAN di default e usare una VLAN dedicata (Corretta)
- C) Disabilitare STP
- D) Usare solo porte trunk

### Domanda 34
Quale pratica è consigliata per le porte switch non utilizzate?

- A) Lasciarle nella VLAN 1
- B) Configurarle come trunk
- C) Disabilitarle e assegnarle a una VLAN "blackhole" (Corretta)
- D) Abilitare DHCP snooping

### Domanda 35
Perché è importante separare il traffico VoIP in una VLAN dedicata?

- A) Per risparmiare indirizzi IP
- B) Per applicare QoS e garantire priorità al traffico voce (Corretta)
- C) Per ridurre il costo degli switch
- D) Per eliminare la necessità di PoE

---

## Sezione 8: Casi Studio e Progettazione

### Domanda 36
In una rete scolastica, perché è consigliato separare la VLAN degli studenti da quella amministrativa?

- A) Per aumentare la velocità di rete
- B) Per proteggere i dati sensibili e limitare l'accesso (Corretta)
- C) Per ridurre il numero di switch necessari
- D) Per semplificare il cablaggio

### Domanda 37
In un ambiente manifatturiero con rete OT (Operational Technology), quale approccio è raccomandato?

- A) Integrare OT e IT nella stessa VLAN per semplicità
- B) Usare range IP diversi e firewall dedicato per isolare completamente la rete OT (Corretta)
- C) Connettere i PLC direttamente a Internet
- D) Usare solo routing statico

### Domanda 38
Quale percentuale di crescita futura è generalmente raccomandata nel dimensionamento delle subnet?

- A) 5-10%
- B) 20-30% (Corretta)
- C) 50-60%
- D) 100%

### Domanda 39
In una struttura sanitaria, quale requisito è critico per la progettazione della rete?

- A) Massimizzare il numero di VLAN
- B) Usare solo indirizzi pubblici
- C) Garantire isolamento completo dei dispositivi medici e tracciabilità degli accessi (Corretta)
- D) Minimizzare il numero di switch

### Domanda 40
Quale elemento NON fa parte di una corretta documentazione di rete?

- A) Schema VLAN con numerazione e naming convention
- B) Piano IP con subnet, gateway e DHCP scope
- C) Password in chiaro degli apparati (Corretta)
- D) Diagramma topologico con collegamenti trunk/access

---

## Risposte Rapide

| Domanda | Risposta |
|---------|----------|
| 1 | B |
| 2 | C |
| 3 | B |
| 4 | B |
| 5 | B |
| 6 | C |
| 7 | B |
| 8 | A |
| 9 | A |
| 10 | B |
| 11 | B |
| 12 | C |
| 13 | B |
| 14 | C |
| 15 | C |
| 16 | A |
| 17 | B |
| 18 | B |
| 19 | C |
| 20 | B |
| 21 | B |
| 22 | C |
| 23 | D |
| 24 | A |
| 25 | C |
| 26 | B |
| 27 | B |
| 28 | B |
| 29 | C |
| 30 | B |
| 31 | B |
| 32 | B |
| 33 | B |
| 34 | C |
| 35 | B |
| 36 | B |
| 37 | B |
| 38 | B |
| 39 | C |
| 40 | C |
