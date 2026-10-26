# The Archive of the Unexplained

**Two cases. Two centuries. Someone left the truth behind.**

An interactive mystery anthology that opens as an antique casebook. Explore a recovered computer in contemporary Kolkata, then investigate a locked-room murder in Victorian England. Each case is a playable investigation built with HTML, CSS and JavaScript.

[Play the hosted demo](https://desktop-of-a-stranger-anshika.sassyolive34.chatgpt.site) · [Player guide](docs/PLAYER_GUIDE.md)

> The hosted ChatGPT Sites demo currently has owner-only access. The source can be run locally or deployed independently on any static host.

## The cases

### Case I — Desktop of a Stranger

Ari Sen's laptop has recovered a session at 02:13. Explore files, notes, messages, illustrations, a recovered transcript and a simulated terminal. Restore discarded evidence and reconnect three memories to unlock a final testimony.

- Draggable, minimizable and maximizable desktop windows.
- A taskbar and responsive full-screen application panels on narrow screens.
- A clue-gated recovery sequence, progressive hints and two endings.
- A reconstruction that uses the visitor's actual in-game action history.
- Optional browser-synthesized ambience; off by default.

### Case II — The Last Bell at Blackthorn Manor

England, November 1900. Sir Edmund Blackthorn is found dead behind a locked study door. Examine physical evidence, check four suspects' statements, compare compensation accounts and build an evidence-backed accusation.

- Evidence close-ups, witness statements and a floor plan.
- A notebook with locally saved personal observations.
- Selectable ledger discrepancies and a justified search.
- A timeline and evidence connections using tap/keyboard-friendly selectors.
- A final reconstruction and completed-case stamp in the book.

## Run locally

No installation, backend, database or API key is needed. Use a static HTTP server because the application uses JavaScript modules.

```bash
git clone https://github.com/anshika8r/the-archive-of-the-unexplained.git
cd the-archive-of-the-unexplained
python -m http.server 8000 --directory dist
```

Open **http://localhost:8000**. On Windows, use `py` instead of `python` if needed. Avoid opening `index.html` directly through `file://`.

## Routes

| Route | Experience |
| --- | --- |
| `/#/` | Animated casebook |
| `/#/case/desktop` | Desktop of a Stranger |
| `/#/case/blackthorn` | Blackthorn Manor |

Hash navigation lets the game work on static hosts without server-side route rewrites. Both cases provide a return-to-archive control.

## Project structure

```text
dist/
  index.html           Casebook entry point
  archive.css          Book and Victorian investigation styles
  archive.js           Navigation, evidence UI and Case II state
  blackthorn-data.js   Suspects, exhibits and deduction rules
  desktop.html         Case I entry point
  style.css            Case I desktop styling
  app.js               Case I window manager and interactions
  story.js             Case I story and recovery rule
docs/
  PLAYER_GUIDE.md      Spoiler-light controls and progression
tests/
  progression.test.mjs Core progression-rule checks
```

## State, accessibility and scope

Each case saves progress independently in this browser's `localStorage`. Restart controls clear only their respective case. Storage is not synchronized across browsers or visitors; clearing site data removes progress. The notebook saves personal observations when **Save note locally** is clicked.

Controls use native buttons, links, forms and keyboard focus indicators. Evidence dialogs support Escape. Reduced-motion CSS provides static equivalents for animations. Responsive layouts are implemented; mobile and reduced-motion behavior have not received a complete visual audit.

This is a frontend workshop prototype. Every person, file, message, system response and case record is fictional. There is no real device inspection, live AI, remote account system, payment flow or backend. The illustrated photographs and suspect silhouettes are original local compositions. The audio app provides a labelled recovered transcript rather than a fictional playable recording.

## Checks

With Node.js 18 or newer:

```bash
npm test
```

The tests cover all six Case I clue orders, premature recovery rejection, Case II search prerequisites, deduction gates, and correct/incorrect accusations. Desktop playthroughs of both cases were manually checked during development. This does not constitute a complete browser or accessibility audit.

## Deploy

Publish the contents of `dist/` on a static host. There is no build command. For GitHub Pages, publish `dist/` through a Pages workflow or copy its contents into your selected Pages source directory. No server secrets or ChatGPT Sites configuration are required.

## Contributing

Use a focused branch and pull request. Keep evidence, timeline and deduction rules consistent when changing story content. Avoid revealing solutions in issue titles. Test both case entries, return navigation, saved progress and restart behavior after changes.

## Credits

Created by **Anshika Rathore** for the Full-Power Frontend workshop, with AI-assisted development in ChatGPT. Built using vanilla HTML, CSS, JavaScript, SVG, Web Audio and browser storage.

No open-source license has been selected yet; publication alone does not grant a reuse license.
