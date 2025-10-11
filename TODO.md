# TODO: Implement Splash Cursor Effect

- [x] Implement SplashCursor.tsx component with canvas-based splash effect
- [x] Update App.tsx to import and use SplashCursor component
- [ ] Test the effect by running the app and verifying mouse interaction

# TODO: Fix FOUC Issue

- [x] Add synchronous CSS link to index.html <head>
- [x] Set <body class="loading"> and empty #root in index.html (remove inline fallback)
- [x] Add loading/fade-in styles to src/index.css
- [x] Update src/main.tsx to remove 'loading' class after render
- [x] Test by running dev server, reloading page, and verifying smooth load with fade-in
