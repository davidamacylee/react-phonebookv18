// export const server_calls = {
//     get: async () => {
//         const response = await fetch(`https://plankton-app-46k8b.ondigitalocean.app/api/contacts`,
//         {
//             method: 'GET',
//             mode: 'cors',
//         });

//         if (!response.ok){
//             throw new Error('Failed to fetch data from the server')
//         }

//         return await response.json()
//     },

//     create: async (data: any = {}) => {
//         const response = await fetch(`https://plankton-app-46k8b.ondigitalocean.app/api/contacts`,
//         {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(data),
//         });

//         if (!response.ok){
//             throw new Error('Failed to create new data on the server')
//         }

//         return await response.json()
//     },

//     update: async (id:string, data: any = {}) => {
//         const response = await fetch(`https://plankton-app-46k8b.ondigitalocean.app/api/contacts/${id}`,
//         {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(data),
//         });

//         if (!response.ok) {
//             throw new Error('Failed to update data on the server')
//         }

//         return await response.json()
//     },

//     delete: async (id: string) => {
//         const response = await fetch(`https://plankton-app-46k8b.ondigitalocean.app/api/contacts`,
//         {
//             method: 'DELETE',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//         });

//         if (!response.ok) {
//             throw new Error('Failed to delete data on the server')
//         }

//         return;
//     }
// }

const token = 'eef1a125c684a9ad5b75a687e974e07c93f0ee540d9c0138'
export const server_calls = {
    get: async () => {
        const response = await fetch(`https://flask-phonebook-lj0u.onrender.com//api/contacts`,
        {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            }
        });
        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }
        return await response.json()
    },
    create: async (data: any = {}) => {
        const response = await fetch(`https://flask-phonebook-lj0u.onrender.com//api/contacts`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        })
        if (!response.ok) {
            throw new Error('Failed to create new data on the server')
        }
        console.log('you are creating a contact');
        return await response.json()
    },
    update: async (id: string, data:any = {}) => {
        const response = await fetch(`https://flask-phonebook-lj0u.onrender.com//api/contacts/${id}`,
        {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        })
        if (!response.ok) {
            throw new Error('Failed to update data on the server')
        }
        console.log('you are updating a contact');
        return await response.json()
    },
    delete: async (id: string) => {
        const response = await fetch(`https://flask-phonebook-lj0u.onrender.com//api/contacts/${id}`,
        {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            },
        })
        if (!response.ok) {
            throw new Error('Failed to delete data from the server')
        }
        return;
    },
}