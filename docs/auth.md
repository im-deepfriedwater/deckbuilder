# Next Auth 

### Access and Refresh tokens

I don't think this'll come up for this project. Google provides you an [access and refresh token](https://developers.google.com/identity/protocols/oauth2) once upon successfully signing into a new app through the OAuth 2.0 protocol. But, I believe those are only needed for accessing a Google API to update something about their account or access a feature. We only need auth to identify a user. Generally, I believe these are the scopes of the access pop-ups you get prompted when apps ask for permission 

If needed, I can persist in the [[datastore]] per user the access & refresh token and then fetch it on sign-in. https://next-auth.js.org/providers/google. 


### Frontend 

We can use the useSession react hook to check if someone is signed in https://next-auth.js.org/getting-started/example#frontend---add-react-hook


### Backend

We can use the getServerSession method to protect a route 

