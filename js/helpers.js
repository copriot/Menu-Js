export const elements = {
    mainArea: document.getElementById("menu-area"),
    buttonArea: document.getElementById("buttons-area"),
    
};
export const calculatePrice = (price) => {
    let newPrice = price * 18;
    newPrice =  newPrice.toFixed(2);
    return newPrice;
  }; 

