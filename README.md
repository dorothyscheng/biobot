# Biobot Kit Shipping Tracking App

This is an app comprised of a server and front end to search kits by label ID and return FedEx tracking information.

## API

### Technologies
- Typescript
- Express.js
- Flexsearch
  - full text search library with a memory-efficient index

### Running the API 
From `./api` run `npm start`

## Client

### Technologies
- Typescript
- Next.js
- Tailwind CSS

### Running the client 
1. From `./client` run `npm run dev`
2. Open [http://localhost:3000](http://localhost:3000) in your browser

## Future Improvements

- Error logging & capture - In the existing state, errors are being logged to the console, but not captured. Add a tool such as sentry to monitor and capture errors.
- When fetching search results, currently the entire document is returned every time. For autocomplete functionality, we can return just the label ID, and fetch tracking info when a label id is selected
- Limit number of results returned by autocomplete. Currently typing in just one number can return a large amount of data.
- Throttle search requests from client to API - Currently, search requests are sent on every keystroke in the input.
- Display message to user when invalid input is entered (non-digit characters). Currently those are sanitized, but there is no message to the user.
- Loading indicator when clicking 'Search'.
- Click away listener for autocomplete menu. Currently there is no way to close it without selecting a result or submitting search form.
- Integrate with FedEx API to display tracking updates directly in the app. Currently the tracking button opens a new tab to FedEx site.