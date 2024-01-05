//Gedeelde map met functies 

export default {
    

    methods: {
        getImgUrl(img){
            console.log('getImgUrl() word aangeroepen vanuit mixins map en bestand.');
            return require('../assets/afbeeldingen/' + img);
        },
        isExpensive(){
            return this.CountryData.countries[this.selectedCountryIndex].cost >= 1000;
         },
 
         isOnSale(){
             return this.CountryData.countries[this.selectedCountryIndex].cost <= 500;
         },
         hide(){
            this.toggleHide = !this.toggleHide;
        },
      
    }
}