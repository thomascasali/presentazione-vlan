# VLAN e Subnetting - Dispensa Interattiva

Una presentazione didattica interattiva realizzata in React per il corso di **Sistemi e Reti** (ITTS - Quinto Anno).

## Contenuti

La dispensa copre i seguenti argomenti organizzati in 7 moduli:

1. **Fondamenti di Indirizzamento IP** - Struttura IPv4, maschere, notazione CIDR
2. **Subnetting FLSM** - Fixed Length Subnet Mask, calcolo sottoreti uniformi
3. **Subnetting VLSM** - Variable Length Subnet Mask, ottimizzazione indirizzi
4. **Introduzione alle VLAN** - Virtual LAN, 802.1Q, porte access/trunk
5. **VLAN vs Subnetting** - Confronto, casi d'uso, uso combinato
6. **Casi Studio** - Scenari reali: scuola, PMI, struttura sanitaria
7. **Attivita Interattive** - Quiz, flashcard, matching game, calcolatore subnet

## Funzionalita

- Navigazione modulare con menu laterale sempre accessibile
- Slide animate con Framer Motion
- Componenti interattivi:
  - Quiz a risposta multipla con feedback
  - Flashcard girabili
  - Gioco di abbinamento drag & drop
  - Calcolatore subnet interattivo con visualizzazione binaria
- Design responsive e tema chiaro
- Numerazione slide per modulo (non globale)

## Tecnologie

- React 18 + Vite
- React Router per la navigazione
- Framer Motion per le animazioni
- CSS custom properties per il theming

## Sviluppo locale

```bash
# Installa dipendenze
npm install

# Avvia server di sviluppo
npm run dev

# Build per produzione
npm run build

# Preview build
npm run preview
```

## Deploy

Il progetto e configurato per il deploy automatico su GitHub Pages tramite GitHub Actions.
Ogni push sul branch `main` triggera il workflow di deploy.

## Struttura del progetto

```
src/
├── components/
│   ├── common/          # Slide, Menu, Navigation
│   └── interactive/     # Quiz, Flashcard, Calculator
├── modules/
│   ├── Module1/         # Fondamenti IP
│   ├── Module2/         # FLSM
│   ├── Module3/         # VLSM
│   ├── Module4/         # VLAN
│   ├── Module5/         # Confronto
│   ├── Module6/         # Casi Studio
│   └── Module7/         # Attivita
├── pages/
│   └── Home.jsx
├── styles/
│   └── global.css
└── App.jsx
```

## Licenza

Materiale didattico per uso educativo.

---

Realizzato per **Sistemi e Reti - ITTS**
