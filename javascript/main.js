// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest();
var requestListado = new XMLHttpRequest();

// Open a new connection, using the GET request on the URL endpoint
var string

requestListado.open('GET', 'https://forex.1forge.com/1.0.3/symbols?api_key=CN2qvr0mUhY8UHPwK505ij5Q82Ig2zSB', true);
requestListado.onload = function () {
  string = requestListado.responseText;
  string = string.replace(/['"]+/g, '').replace("[", "").replace("]", "")

}
requestListado.send();

request.open('GET', 'https://forex.1forge.com/1.0.3/quotes?pairs=' + string + '&api_key=CN2qvr0mUhY8UHPwK505ij5Q82Ig2zSB', true);

auxiliar = []
favoritosD=[]
request.onload = function () {
  if (request.readyState === 4) {
    if (request.status === 200) {
      json = JSON.parse(request.responseText); // convierte la consulta en un json
      //alert(json.length); // muestra el numero de elementos guardados en la consulta
      console.log(json.length)
      for(i = 0; i<json.length;i++){
        auxiliar[i]= { "symbol": json[i].symbol, "price": json[i].price,"bid":json[i].bid, "ask": json[i].ask, "timestamp":json[i].timestamp }

      }
      console.log(auxiliar)
      Vue.component('demo-grid', {
        template: '#grid-template',
        props: {
          heroes: Array,
          columns: Array,
          filterKey: String
        },
        data: function () {
          var sortOrders = {}
          this.columns.forEach(function (key) {
            sortOrders[key] = 1
            
          })
          return {
            sortKey: '',
            sortOrders: sortOrders
          }
        },
        computed: {
          filteredHeroes: function () {
            var sortKey = this.sortKey
            var filterKey = this.filterKey && this.filterKey.toLowerCase()
            var order = this.sortOrders[sortKey] || 1
            var heroes = this.heroes
            if (filterKey) {
              heroes = heroes.filter(function (row) {
                return Object.keys(row).some(function (key) {
                  return String(row[key]).toLowerCase().indexOf(filterKey) > -1
                })
              })
            }
            if (sortKey) {
              heroes = heroes.slice().sort(function (a, b) {
                a = a[sortKey]
                b = b[sortKey]
                return (a === b ? 0 : a > b ? 1 : -1) * order
              })
            }
            return heroes
          }
        },
        filters: {
          capitalize: function (str) {
            return str.charAt(0).toUpperCase() + str.slice(1)
          }
        },
        methods: {
          sortBy: function (key) {
            this.sortKey = key
            this.sortOrders[key] = this.sortOrders[key] * -1
          }
        }
      })
      
      // bootstrap the demo
      var demo = new Vue({
        el: '#demo',
        data: {
          searchQuery: '',
          gridColumns: ['Symbol', 'Price', 'Bid','Ask','Timestamp', ],
          gridData: [
            
            { Symbol: auxiliar[0].symbol, Price: auxiliar[0].price, Bid:auxiliar[0].bid, Ask:auxiliar[0].ask, Timestamp:auxiliar[0].timestamp  }
          
          ]
          
        },
        mounted(){
          this.agregar();
        },
        methods:{
         
          agregar(){
            for(i = 1; i<json.length;i++){
              this.gridData.push({Symbol: auxiliar[i].symbol, Price: auxiliar[i].price, Bid:auxiliar[i].bid, Ask:auxiliar[i].ask, Timestamp:auxiliar[i].timestamp})
            }
          },
          favoritos(){
            existe=false
            var aux = this.searchQuery.toUpperCase()
            for(i = 0;i<auxiliar.length;i++){
              if(aux==auxiliar[i].symbol){
                favoritosD.push(auxiliar[i])
                break
              }
            }
            localStorage.setItem("favoritos",JSON.stringify(favoritosD))
            console.log(favoritosD)
          }
        }
      })
      
      //console.log(auxiliar[0])
      // aux = request.responseText
      //console.log(aux)
    }
  }
}

//console.log(json[4].ask)
// Send request
request.send();



