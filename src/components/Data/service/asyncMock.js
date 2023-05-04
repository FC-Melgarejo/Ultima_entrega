const products = [
    {
        id: '1',
        name:'Remera',
        price: '1000',
        category: 'remeras',
        img:'/image/product1.jpg',
        stock: '10',
        description: 'Remera de algodon'
    },
    {
        id: '2',
        name:'Auricular',
        price: '1000',
        category: 'auriculares',
        img: '/image/product2.jpg',
        stock: '10',
        description: 'Auriculares inalambricos'
    },
    {
        id: '3',
        name:'Parcka',
        price: '1000',
        category: 'camperas',
        img:'/image/product3.jpg',
        stock: '10',
        description: 'Campera reversible,abrigada'
    },  {
        id: '4',
        name:'Botella',
        price: '1000',
        category: 'botellas',
        img:'/image/product4.jpg',
        stock: '10',
        description: 'Botellas de aluminio,frio y calor'
    },
    {
        id: '5',
        name:'Anteojos',
        price: '1000',
        category: 'anteojos',
        img:'/image/product5.jpg',
        stock: '10',
        description: 'Anteojos de sol'
    },
    {
        id: '6',
        name:'Gorrito',
        price: '1000',
        category: 'gorros',
        img:'/image/product6.jpg',
        stock: '10',
        description: 'gorros de algodon'
    },
    {
        id: '7',
        name:'Mochila',
        price: '1000',
        category: 'mochilas',
        img:'/image/product7.jpg',
        stock: '10',
        description: 'Mochilas cool'
    },
    {
        id: '8',
        name:'Zapatillas',
        price: '1000',
        category: 'zapatillas',
        img:'/image/product8.jpg',
        stock: '10',
        description: 'Zapatillas running'
    },
]
    export const getProducts = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(products)
            }, 500)
        })
    }
    export const getProductById = (productId) => {
        return new Promise((resolve)=>{
            setTimeout(() => {
                resolve(products.find(prod => prod.id === productId))
            }, 500)
        })
    }

    export const getProductsByCategory = (categoryId) => {
        return new Promise((resolve)=>{
            setTimeout(() => {
                resolve(products.filter(prod => prod.category === categoryId))
            }, 500)
        })
    }
            
        