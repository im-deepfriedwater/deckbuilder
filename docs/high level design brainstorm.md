# Goals
- Build a website with interactive UI to build, view, and store decks across multiple TCGs
- Learning
- Minimize costs where possible to keep things free


## Architecture 
- Frontend: TypeScript, React, NextJS 
  - Hosted on Vercel 
- Backend: TypeScript, NextJS 
  - Hosted on Vercel (via NextJS deployment).
  - Java? Golang? Mostly for learning purposes because NextJS can handle the backend logic fine since it'll be pretty simple CRUD calls.
  - It would be a good excercise to make an interface to decouple the backend from any one data source. 
    This would make it easier to experiment and learn setup for working with different types of DBs/Providers. Also make it flexible
    to switch datastores if needed since I'm primarily operating out of the free tiers. 

I'll prioritize building out a working concept and then once that's there I can experiment with swapping out different technologies for learning purposes. 