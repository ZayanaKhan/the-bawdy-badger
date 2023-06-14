import { writable, derived, readable } from 'svelte/store';

import { api } from './server.js';

export function GetAllMessageHashesRoute() {
  return `${api}/message`;
}

export function GetMessageMetadataRoute(messageHash) {
  return `${api}/message/${messageHash}/metadata`;
}

export function GetMessageMetadataStringRoute(messageHash) {
  return `${api}/message/${messageHash}/string`;
}

export function GetMessageReadRoute(messageHash) {
  return `${api}/message/${messageHash}/read`;
}

export function GetMessageLabelRoute(messageHash) {
  return `${api}/message/${messageHash}/label`;
}
export function GetMessageIpRoute(messageHash) {
  return `${api}/message/${messageHash}/ip`;
}

export function GetMessageTranscriptRoute(messageHash) {
  return `${api}/message/${messageHash}/transcript`;
}

export function GetMessageTimeRoute(messageHash) {
  return `${api}/message/${messageHash}/time`;
}

export function GetMessageTimeServerRoute(messageHash) {
  return `${api}/message/${messageHash}/time/server/`;
}

export function GetMessageTimeServerHourRoute(messageHash) {
  return `${api}/message/${messageHash}/time/server/hour`;
}

export function GetMessageAudioFileWavRoute(messageHash) {
  return `${api}/message/${messageHash}/audio/file/wav`;
}