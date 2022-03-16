const array = [
    {name: 'iphone', price: 6000, quantity: 2},
    {name: 'mac', price: 60000, quantity: 3},
    {name: 'imac', price: 600000, quantity: 1},

]
// find e findIndex
const find = array.find((product) => {
    //console.log(product.name==='imac');
    //console.log(product)

    //return product.name === 'imac'

    return product.price > 1000

});

//console.log(find)

const findIndex = array.findIndex((product) => product.name === 'imac')

//console.log(findIndex)



//  some e every
const some = array.some((product)=> product.price < 1000)

//console.log(some)

const every = array.every((product)=> product.price > 1000)

//console.log(every)

//map

const map = array.map((product)=> {
    return {
        ...product,
        subtotal: product.quantity * product.price,
    }
})

//console.log(map)


//filter 

const filter = array.filter((product)=>  product.quantity > 1)

//console.log(filter)

// reduce 

const reduce = array.reduce((accumulator, product)=>  {
    //console.log(accumulator)    
    return accumulator + product.price * product.quantity
}, 0)

console.log({ reduce })
