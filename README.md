# The Lyrics Finder You Have Been Looking For!

Intended Audience: Music lovers everywhere especially those who need to find the lyrics to their favorite song! It can be frustrating to have a song stuck in your head and only remember a few lines of the song! We have all been there! Now there's an app that finds the lyrics for you. All you need is the artist/band name and the song title. Returned to you will be the nicely formatted lyrics awaiting for you to sing along. If your song is unfortunately not in the database or if either the artist/band or song is misspelled, you will see a message asking you to try another search. So, have some fun and try it out!

Check out my app: [Sariah Campopiano's Lyrics Finder](https://sariah-campopiano-lyrics-finder.netlify.app)

For anyone wanting to clone my code from GitHub to their local machine, feel free to do so! Here's what you will need to do:
- Get your local machine ready for cloning code
- On my Lyrics-API repository, click the dropdown option called "Code"
- You are going to want the "SSH" option, so be sure you are on that
- Copy the .git and paste it into your local terminal
- Once on your coding editor, like Visual Studio Code, you will run npm install in your command line
- Once install is complete, run npm start to start the application

### What I Learned
This was my first project ever to have an external database that I needed to create API calls for to retrieve data for users. It was a learning experience to add API calls and promises to what I have thus learned about HTML, CSS and JavaScript. After completing this project, I understand how to communicate between frontend and backend better even if I am only writing the code for the frontend. I complete the minimaml viable product (MVP) then posted my netlify link on LinkedIn. There my instructor, Teresa Vasquez, another senior developer and myself discussed possible stretch goals for this project. We came up with 3 stretches. First, adding a spinner to render on the DOM until the promise came back from the database and rendered the lyrics to the DOM. Next, the format of the lyrics should be more readable. Lastly, an error message would render if either a user misspelled their artist/band input or their song input OR if the database didn't have their song at all. The error message was the most challenging of the three for me, but I learned that I could use the .catch I wrote since it's where undefined results from the API call come back and write an arrow function with a code block to have an error message render to the DOM. My coding knowledge, understanding and skills are improving.

### Finding Lyrics

<img src="components/gifs/finding-lyrics.gif" alt="walk through of searching for lyrics" style="height:800px;">

### Lyrics Not Found

<img src="components/gifs/lyrics-not-found.gif" alt="walk through of searching for lyrics" style="height:800px;">
