const db = new Dexie('ShoppingApp')
db.version(1).stores(e: { items: '++id,name,price,isPurchased' })

db.version(1).stores(e{ items: '++id,name,price,isPurchased'})

const itemForm = document.getElementById(elementId: 'itemForm')
const itemsDiv = document.getElementById(elementId: 'itemsDiv')
const totalPriceDiv = document.getElementById(elementId: 'totalPrifceDiv')