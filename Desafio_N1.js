class ProductManager {

    products 
    
    constructor() {
       this.products = []
    }

    addProduct(title, description, price, thumbnail, code, stock) {

        if(title && description && price && thumbnail && code && stock && this.validarCode(code) ) {
            let producto = {
                id: this.getNewId(),
                title,
                description,
                price,
                thumbnail,
                code,
                stock
            }
            this.products.push(producto)
            console.log('Producto agregado con exito');
        }else {
            console.log('Validar Campos');
        }
    }

    getProducts() {
        console.log(this.products); 
    }
    getProductsById(id) {
        let find = this.products.find(item => item.id == id)
        //console.log("Not found");
        return find ? this.products[id-1] : "Not found";
        
    }

    getNewId() {
      return  this.products.length + 1;
    }
    validarCode(code) {
        let finder = this.products.find(item => item.code == code) 
        return finder ? false : true;
        }  
    
}



    let poductManager = new ProductManager()        // Creamos la clase product manager                

    poductManager.addProduct('Titile1', 'Primer Producto', 5, 'http.img', 456, 40);
    poductManager.addProduct('Titile2', 'Segundo Producto', '10', 'http.img', 456, 40);
    poductManager.getProducts(); 
    poductManager.getProductsById(1);