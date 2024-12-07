import { initializeApp } from "firebase/app";
import { getAuth, getIdToken, Auth } from "firebase/auth";
import { getInstallations, getToken } from "firebase/installations";

// this is set during install
let firebaseConfig: object;

self.addEventListener('install', event => {
  // extract firebase config from query string
  const serializedFirebaseConfig = new URL(location as any).searchParams.get('firebaseConfig');
  
  if (!serializedFirebaseConfig) {
    throw new Error('Firebase Config object not found in service worker query string.');
  }
  
  firebaseConfig = JSON.parse(serializedFirebaseConfig);
  console.log("Service worker installed with Firebase config", firebaseConfig);
});

self.addEventListener("fetch", (event: any) => {
  const { origin } = new URL(event.request.url);
  if (origin !== self.location.origin) return;
  event.respondWith(fetchWithFirebaseHeaders(event.request));
});

// TODO: add Firebase Authentication headers to request
async function fetchWithFirebaseHeaders(request: any) {
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const installations = getInstallations(app);
  const headers = new Headers(request?.headers);
  const [authIdToken, installationToken] = await Promise.all([
    getAuthIdToken(auth),
    getToken(installations),
  ]);

  headers.append("Firebase-Instasnce-ID-Token", installationToken);
  if (authIdToken) headers.append("Authorization", `Bearer ${authIdToken}`);

}

// TODO: get user token
async function getAuthIdToken(auth: Auth) {
  await auth.authStateReady();
  if (!auth?.currentUser) return;
  return await getIdToken(auth.currentUser);
}