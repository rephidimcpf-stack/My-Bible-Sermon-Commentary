MY BIBLE - Telugu Bible Commentary
==================================

This folder is ready to upload to a web host so the app installs as a
proper phone app (home-screen icon, its own window, works offline).

FILES (keep all five together, in the same folder)
--------------------------------------------------
  Naveen-Bible-Commentary.html   the whole app (Bible, commentary, sermons)
  manifest.webmanifest           app name, colours, icon list
  sw.js                          offline service worker
  icon-192.png                   home-screen icon
  icon-512.png                   large / splash icon

Do not rename or move these apart - the app finds them next to the HTML.

HOW TO PUT IT ONLINE (pick one)
-------------------------------
Option A - Netlify Drop (easiest, no account needed to start)
  1. Go to  https://app.netlify.com/drop
  2. Drag this whole folder onto the page.
  3. Wait for the link it gives you (like https://something.netlify.app).
  4. Open that link on your phone.

Option B - GitHub Pages
  1. Create a repository and upload the five files.
  2. Settings > Pages > Source: "Deploy from a branch", branch "main", folder "/root".
  3. Open the published https://<your-name>.github.io/<repo>/ link.

INSTALL IT ON YOUR PHONE
------------------------
  Android / Chrome: open the link, tap the menu (three dots) > "Install app"
                    or "Add to Home screen".
  iPhone / Safari:  open the link, tap Share (the square with an arrow) >
                    "Add to Home Screen".
Once installed it opens offline, with the "My Bible" name and icon.

NOTES
-----
  - Opening the HTML file directly from your phone or computer also works;
    the other four files are only needed for the installable app version.
  - Your notes, favourites, highlights and sermons are stored inside the
    browser on your device. Use the app's backup buttons to save a copy
    (they let you choose where the file goes) and keep it somewhere safe.
  - To update later, replace the HTML file (keep the same name) and the
    app will refresh itself the next time it is opened online.
