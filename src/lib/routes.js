import { writable, derived, readable } from 'svelte/store';

import { api } from './server.js';

export function GetAllMessageHashesRoute() {
  return `${api}/message`;
}