class Mkulima {  
    constructor() {
      this.farms = [];
      this.products = [];
      this.orders = [];
      this.addFarm= function(farmId,name,farmer,phone,address){
            this.farms.push({farmId,name,farmer,phone,address})
      }
      this.removeFarm=function(id){
         let locateFarm= this.farms.find(item=>item.farmId===id)
         let farmIndex=this.farms.indexOf(locateFarm)
         this.farms.splice(farmIndex,1)
      }
      this.updateFarm=function(oldId,newFarmId, newName, newFarmer, newPhone, newAddress){
              let locateFarm= this.farms.find(item=>item.farmId===oldId)
              locateFarm.farmId = newFarmId
              locateFarm.name=newName
              locateFarm.farmer=newFarmer
              locateFarm.phone=newPhone
              locateFarm.address=newAddress
      }
      this.getFarm=function(id){
          console.log(this.farms.find(object=>object.farmId===id))
      }
      this.addProduct= function(productId,name,price){
          this.products.push({productId,name,price})
    }
    this.removeProduct=function(id){
       let productIndex= this.products.findIndex(item=>item.productId===id)
       this.farms.splice(productIndex,1)
    }
    this.updateProduct=function(oldId,newId, newName, newPrice){
            let product= this.products.find(item=>item.productId===oldId)
            product.farmId=newId
            product.name=newName
            product.farmer=newPrice
    }
    this.getProduct=function(id){
      console.log(this.products.find(product=>product.farmId===id))
     }
  
  
    this.printProducts=function(){
      console.log(this.products)
     }
     this.calculateOrderCost=function(id,quantity){
      let product= this.products.find(item=>item.productId===id)
      console.log(`For ${quantity} of ${product.name}, the cost of your order is ${product.price*quantity}`)
      this.orders.push(product)
      this.order
  
     }
  }
  }
  
  let MkulimaPlatform= new Mkulima()
  MkulimaPlatform.addFarm("123","Coffee farm","Judith","0712345678","Gatanga,Ndakaini")
  MkulimaPlatform.addFarm("456","Tea farm","Joan","0791011121","Kiambu,Thika")
  MkulimaPlatform.updateFarm("123","112","Cotton farm","Judy","0713141516","Naivasha")
  console.log(MkulimaPlatform.farms)
  MkulimaPlatform.getFarm("112")

  MkulimaPlatform.removeFarm("112")
  console.log(MkulimaPlatform.farms)

  MkulimaPlatform.addProduct("999","Mango farm","10k")
  console.log(MkulimaPlatform.products)


 MkulimaPlatform.updateProduct("999","888","Ninah","5k")
  console.log(MkulimaPlatform.products)
