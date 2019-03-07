
const registro = new Vue({
    el: '#registro',
    data: {
        registro: 'Registro',
        welcome: 'Welcome to BTA',
        usuarios: [
            
        ],
        
        newNombre:'', newEdad:'', newTelefono:'', newCorreo:'',newClave:'',
        correoSesion:'', claveSesion:''
    },
    mounted(){
        this.cerrarSesiones();
      },
    methods:{
        
        agregarUsuario(){
            usuarios=JSON.parse(localStorage.getItem("myData"))
            this.usuarios.push({
                nombre: this.newNombre,
                edad: this.newEdad,
                telefono: this.newTelefono,
                correo: this.newCorreo,
                clave: this.newClave
            }),
            this.newNombre = ''
            this.newEdad = ''
            this.newTelefono = ''
            this.newCorreo = ''
            this.newClave = ''
            localStorage.setItem('myData' ,JSON.stringify(this.usuarios));
        },
        restriccion: function(){
            if(this.newNombre == '' | this.newEdad == '' | this.newTelefono == '' | this.newNombre == '' | this.newCorreo == '' | this.newClave == ''){
                alert('Te falto un campo por llenar')
            } else {
                this.agregarUsuario()
            }
        }, 
        login(){
            var object = JSON.parse(localStorage.getItem('myData'));
            var registrado = false;
            for(i=0; i<object.length; i++){
                if(object[i].correo == this.correoSesion & object[i].clave == this.claveSesion){
                    console.log('sesion iniciada')
                    localStorage.setItem('indice', JSON.stringify(this.correoSesion))
                    location.href="divisas.html"
                    registrado=true
                    break
                } 
            }
            if(registrado==false){
                alert("Usuario no registrado")
            }
        },
        cerrarSesiones(){
            localStorage.setItem('indice', JSON.stringify(null))
        },
        edit: function(index){
            console.log('editar ', index)
            console.log(index)
            this.newNombre = this.usuarios[index].nombre
            this.newEdad = this.usuarios[index].edad
            this.newTelefono = this.usuarios[index].telefono
            this.newCorreo = this.usuarios[index].correo
            this.newClave = this.usuarios[index].clave
   
            document.getElementById('btnEditar').style.display = 'inline'
            document.getElementById('btnRegistrar').style.display = 'none'
            this.registro = 'Edicion'
        },
        confirmEdition: function(index){
            console.log(index)
            this.usuarios[index].nombre = this.newNombre
            this.usuarios[index].edad = this.newEdad
            this.usuarios[index].telofono = this.newTelefono
            this.usuarios[index].correo = this.newCorreo
            this.usuarios[index].clave = this.newClave

            document.getElementById('btnEditar').style.display = 'none'
            document.getElementById('btnRegistrar').style.display = 'inline'
            localStorage.setItem('myData' ,JSON.stringify(this.usuarios));
        },
        eliminar: function(index){
           this.usuarios.splice(index, 1)
           localStorage.setItem('myData' ,JSON.stringify(this.usuarios));
        }
        
    }, 
   
})

