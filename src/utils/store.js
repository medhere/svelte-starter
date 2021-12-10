import { persist, localStorage, sessionStorage, cookieStorage } from "@macfja/svelte-persistent-store"
import {writable} from 'svelte/store';
export const state=writable('test state');

export const theme1 = persist(writable('light1'), localStorage(), 'myapp-theme1')
export const theme2 = persist(writable('light2'), sessionStorage(), 'myapp-theme2')
export const theme3 = persist(writable('light3'), cookieStorage(), 'myapp-theme3')
