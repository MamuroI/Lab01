const app = Vue.createApp({
    data(){
        return{
            product:'Shoes',
            description:"Boots or Shoes, ScooBy-Doo",
            image:'./assets/images/socks_green.jpg',
            link:'https://www.camt.cmu.ac.th/index.php/th/',
            inStock: true,
            inventory: 10,
            onSale: true,
            details: ['50% cotton','30% wool','20% polyester'],
            variants: [
                {
                    id:2234, 
                    color:'green'
                },
                {
                    id:2235, 
                    color:'blue'
                }
            ],
            sizes:[
                'S','M','L'
            ]
        }
    }
})