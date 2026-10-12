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

UPDATING LATER (IMPORTANT)
--------------------------
To update, replace the HTML file (keep the same name) AND upload sw.js again.
The app now updates itself: it checks for a new version every time it opens
and comes back to the foreground, and reloads automatically when one is found.
If your phone still shows an old version, open the site once in the phone's
browser (not the home-screen icon) and reload, or clear the site's cached
data in the browser settings, then open the app again.

You can confirm which version is running: open the app, go to Settings and
look at "Install as app" - it shows the app version there.

BACKUP AND RESTORE
------------------
Your notes, favourites, highlights, word comments, verse edits and sermons are
stored inside the browser on your device. Use the app's buttons to save a copy
and move it between your computer and your phone:

  Backup (full file)      ->  Restore   loads it back
  Export notes (notes only) -> Import notes  loads it back

The two are interchangeable now: Restore also accepts an Export-notes file,
and Import notes also accepts a full Backup file, so it no longer matters
which pair you use.

When you Restore, the app asks a simple question:
  OK     = Replace  - make this device match the backup exactly
                      (items you deleted on the other device are removed here too)
  Cancel = Merge    - keep what is already on this device and add/update

Tip: to move everything from your computer to your phone, press Backup on the
computer, move the file to the phone, then press Restore on the phone and
choose OK (Replace).

NOTES
-----
  - Opening the HTML file directly from your phone or computer also works;
    the other four files are only needed for the installable app version.
    (Backup/Restore still works when opening the file directly.)
