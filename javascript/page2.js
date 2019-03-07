
const registro = new Vue({
    el: '#registro',
    data: {
        registro: 'Editar Favoritos',
        welcome: 'Welcome to BTA',
        usuarios: [
            
        ],
        
        newNombre:'', newEdad:'', newTelefono:'', newCorreo:'',newClave:'',
        correoSesion:'', claveSesion:''
    },mounted(){
        this.agregarUsuario();
      },
    methods:{
        
        agregarUsuario(){
            
            var indice=JSON.parse(localStorage.getItem("indice"))
            var nena = JSON.parse(localStorage.getItem("favoritos"+indice))
            for(i = 0; i<nena.length;i++){
                this.usuarios.push({symbol: nena[i].symbol,
                        ask:nena[i].ask,
                        price:nena[i].price,
                        bid:nena[i].bid,
                        timestamp:nena[i].timestamp})
            }
            console.log(this.usuarios)
            this.newNombre = ''
            this.newEdad = ''
            this.newTelefono = ''
            this.newCorreo = ''
            this.newClave = ''
           // localStorage.setItem('myData' ,JSON.stringify(this.usuarios));
        },
        restriccion: function(){
            if(this.newNombre == '' | this.newEdad == '' | this.newTelefono == '' | this.newNombre == '' | this.newCorreo == '' | this.newClave == ''){
                alert('Te falto un campo por llenar')
            } else {
                var indice=JSON.parse(localStorage.getItem("indice"))
                var nena = JSON.parse(localStorage.getItem("favoritos"+indice))
                for(i=0;i<nena.length;i++){
                    if(nena[i].symbol==this.newNombre){
                        nena[i].ask=this.newTelefono
                        nena[i].bid=this.newCorreo
                        nena[i].price=this.newEdad
                        nena[i].timestamp=this.newClave
                        

                    }
                }
                var indice=JSON.parse(localStorage.getItem("indice"))
                localStorage.setItem("favoritos" + indice,JSON.stringify(nena))
                //agregarUsuario();
                location.reload();
                alert("Cambios realizados")
            }
        },
        
        edit: function(index){
            var indice=JSON.parse(localStorage.getItem("indice"))

            console.log('editar ', index)
            this.newNombre = this.usuarios[index].symbol
            this.newEdad = this.usuarios[index].price
            this.newTelefono = this.usuarios[index].ask
            this.newCorreo = this.usuarios[index].bid
            this.newClave = this.usuarios[index].timestamp
            //localStorage.setItem('favoritos' + indice,JSON.stringify(this.usuarios));
        },
        eliminar: function(index){
           this.usuarios.splice(index, 1)
           var indice=JSON.parse(localStorage.getItem("indice"))

           localStorage.setItem('favoritos' + indice ,JSON.stringify(this.usuarios));
        }
        
    }, 
   
})

