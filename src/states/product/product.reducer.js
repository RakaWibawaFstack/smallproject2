const listProducts = [{
    productId: 1,
    productColor: "Black",
    productTitle: "Harmony Casual Eyeglasses",
    productName: "Kacamata tampan dan berani",
    productDescription: "Lorem ipsum 1",
    productMaterial: "Lensa kacamata terbuat dari Frame Kacamata Oakley",
    productPrice: 11.99,
    productSex: "Mens",
    productSize: "",
    productPayment: "BCA",
    productDiscount: "$25.99"
  },{
    productId: 2,
    productColor: "Black",
    productTitle: "Black Sweater",
    productName: "Bergaya Trendy dan Elegan",
    productDescription: "Lorem ipsum 2",
    productMaterial: "100% Fleece",
    productPrice: 23.99,
    productSex: "Mens",
    productSex: "",
    productPayment: "Mandiri",
    productDiscount: "$45.99"
  },{
    productId: 3,
    productColor: "Black & White",
    productTitle: "Casual Shirt",
    productName: "Stylish Bergaya",
    productDescription: "Lorem ipsum 3",
    productMaterial: "100% Kain Oxford",
    productPrice: 10.99,
    productSex: "Mens",
    productSize: "",
    productPayment: "BCA",
    productDiscount: "$26.99"
  },{
    productId: 4,
    productColor: "Brown & Black",
    productTitle: "Lamb Jacket Gangster",
    productName: "Jaket Macho berani dan stylish",
    productDescription: "Lorem ipsum 4",
    productMaterial: "100% Fleece",
    productPrice: 18.99,
    productSex: "Mens",
    productSize: "",
    productPayment: "BCA",
    productDiscount: "$42.99"
  }]

const initialState = {
    products: listProducts,
    product: {
        productId: 0,
        productColor: "",
        productTitle: "",
        productName: "",
        productDescription: "",
        productMaterial:"",
        productPrice: 0,
        productSex: "",
        productSize: "",
        productPayment: "",
        productDiscount: 0
    }
}

const productReducer = (state = initialState, action) => {
    switch(action.type){
        case "GET_PRODUCTS": 
            return {
                ...state,
                products: state.products
            } 
        default: return state
    }
}

export default productReducer;