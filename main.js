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
                    color:'green',
                    image:'./assets/images/socks_green.jpg'
                },
                {
                    id:2235, 
                    color:'blue',
                    image:'./assets/images/socks_blue.jpg'
                }
            ],
            sizes:[
                'S','M','L'
            ],
            cart: 0
        }
    },
    methods: {
        addToCart(){
            if(this.cart<this.inventory){
                this.cart += 1
            }else{
                this.cart = this.inventory
            }
            
        },
        updateImage(variantImage){
            this.image = variantImage
        },
        changeStatus(){
            
        }
    }
})