# shazam-top100-google-music

This script creates a playlist in Google Music with all the songs that are trending on the Shazam's Top 100 global chart.

## Usage
```bash
npm install
```
You have to copy *config.js.example* to *config.js* and add your Google credentials.
Google Music All Access subscription **is required**.  
If you have 2-step verification enabled, you will have to create an app password to use with this script. You can create it [here](https://security.google.com/settings/security/apppasswords).  
Then you can run the script:
```bash
npm start
```
That's it! Enjoy!

##Todo

 1. Shazam doesn't have the IDs for all the songs in their chart, although most of those songs exist in gMusic. It would be nice that if the ID is not defined, the script searched for that song in gMusic library. 
