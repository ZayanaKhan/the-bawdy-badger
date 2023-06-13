import { writable, derived, readable } from 'svelte/store';

let server = '98.7.198.132'
let port = '44000'
let version = 'v1'
export const api = `http://${server}:${port}/${version}`