// Config
import { root } from './config';

export const api = Object.freeze({
    users: {
        getMe: () => {
            return fetch(`${root}/profile`, {
                method: 'GET',
                credentials:'include'
            });
        },
        create: (payload) => {
            return fetch(`${root}/users`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload),
            });
        },
        updateMe: (payload) => {
            return fetch(`${root}/users`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials:'include',
                body: JSON.stringify(payload),
            });
        },
        login: (credentials) => {
            return fetch(`${root}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': `Base ${credentials}`
                },
                credentials:'include'
            });
        },
        logout: () => {
            return fetch(`${root}/logout`, {
                method: 'POST',
                credentials:'include'
            });
        },
    },
    tracker: {
        getScore: () => {
            return fetch(`${root}/reports`, {
                method: 'GET',
                credentials:'include'
            });
        },
        getRecord: ({type}) => {
            const params = new URLSearchParams({
                kind: type,
            });

            return fetch(`${root}/records?${params}`, {
                method: 'GET',
                credentials:'include'
            });
        },
        createRecord: ({type, record}) => {
            const params = new URLSearchParams({
                kind: type,
            });

            return fetch(`${root}/records?${params}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials:'include',
                body: JSON.stringify({
                    value: record
                }),
            });
        },
        updateRecord: ({type, hash, record}) => {
            const params = new URLSearchParams({
                kind: type,
            });

            return fetch(`${root}/records/${hash}/?${params}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials:'include',
                body: JSON.stringify({
                    value: record
                }),
            });
        },
        removeAllRecords: () => {
            return fetch(`${root}/reports/reset`, {
                method: 'POST',
                credentials:'include'
            });
        },
    }
});
