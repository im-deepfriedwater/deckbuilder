require('dotenv').config()

import { config as dotenvConfig } from 'dotenv';

dotenvConfig();

const config = {
  apiKey: process.env['apiKey'],
  authDomain: process.env['authDomain'],
  projectId: process.env['projectId'],
  storageBucket: process.env['storageBucket'],
  messagingSenderId: process.env['messagingSenderId'],
  appId: process.env['appId'],
  measurementId: process.env['measurementId'],
};

// // When deployed, there are quotes that need to be stripped
// Object.keys(config).forEach((key: string) => {
//   const configValue = config[key] + "";
//   if (configValue.charAt(0) === '"') {
//     config[key] = configValue.substring(1, configValue.length - 1);
//   }
// });
export const firebaseConfig = config;

