THREAD & FORM — GITHUB PAGES + GA4 STARTER

1. Extract my-website.zip.
2. Upload index.html, products.html, about.html, contact.html, style.css, script.js and images/
   to the ROOT of a public GitHub repository.
3. GitHub repository > Settings > Pages > Deploy from a branch > main > /(root) > Save.
4. Open the published URL. It may take several minutes on the first deployment.
5. GA4 is currently a PLACEHOLDER. Replace G-XXXXXXXXXX in the Google tag in ALL FOUR HTML
   files with your actual GA4 Measurement ID. Save/commit the changed files.
6. The contact and newsletter forms are demonstrations only. They do not send/store data.
   They emit demo_form_submit after valid browser-side checks. Do not label these as leads or
   real subscriptions. Product exploration buttons emit select_item.
7. This is a fictional learning project. Product prices, testimonials and contact details are
   sample content. Images are loaded from Unsplash URLs and require an internet connection.

GA4 setup:
- Visit https://analytics.google.com/ and create an account/property.
- Choose Web when creating a data stream; enter your published GitHub Pages URL.
- Copy the Measurement ID beginning G-.
- Replace G-XXXXXXXXXX in the gtag script and config line on each HTML page.
- Test using Reports > Realtime and Admin/Configure > DebugView (menu names may vary).
- Standard GA4 page_view tracking is enabled by gtag('config', 'YOUR_ID') on each page.
