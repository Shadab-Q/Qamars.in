QAMARS CONSULTING — READY-TO-LAUNCH STATIC WEBSITE
====================================================

Pages
-----
index.html      Home
about.html      About + client experiences
services.html   Services
insights.html   Insights index
post.html       Individual insight reader
contact.html    Contact + enquiry form
404.html        404 page

Launch
------
1. Upload the entire folder to your GitHub Pages repository (or hosting root).
2. Keep the assets folder structure unchanged.
3. In contact.html replace:
   https://formspree.io/f/YOUR_FORM_ID
   with your live Formspree endpoint.
4. Verify your domain is set to https://qamars.in/.

Brand
-----
The supplied QAMARS logo is used at assets/img/logo.png with the original blue/green artwork preserved; the surrounding white background is made transparent for clean use on both light and dark sections.

Contact details used
--------------------
Call:    +91 87894 82043
WhatsApp:+91 92969 82043
Email:   connect@qamars.in
Main:    137/4, Lalita Park, Laxmi Nagar, New Delhi – 110092
Branch:  Flat 2B, Zain Complex, Church Road, Ranchi, Jharkhand – 834001

Publishing new content
----------------------
Edit assets/js/posts.js. Add another object to window.QAMARS_POSTS using the same fields:
slug, category, title, excerpt, date, body.
The new content automatically appears on Insights. Use post.html?slug=YOUR-SLUG for the article page.
This is intentionally static and GitHub Pages friendly; no database or server is required.

Responsive design
-----------------
The site is designed to adapt across large desktop monitors, laptops, Android phones and iPhones, with an accessible mobile navigation menu, responsive grids, flexible typography, touch-friendly CTAs and viewport-safe spacing.

Final pre-launch checks
-----------------------
- Connect Formspree.
- Test the contact form and WhatsApp link on a phone.
- Add your Google Business Profile / social links when ready.
- Replace the sample Insights articles with your own published content as you build the knowledge library.

Social media links
------------------
Facebook, LinkedIn and Instagram icons are included in the footer as inactive placeholders until your QAMARS profiles are created. When ready, replace the href="#" values on the three .social-placeholder links with your profile URLs.
