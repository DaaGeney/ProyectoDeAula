
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
    methods:{
        
        agregarUsuario(){
            
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
            for(i=0; i<create.object.length; i++){
                if(create.object[i].correo == this.correoSesion & create.object[i].clave == this.claveSesion){
                    console.log('sesion iniciada')
                    localStorage.setItem('indice', JSON.stringify(this.correoSesion))
                    break
                } 
            }
        },
        edit: function(index){
            console.log('editar ', index)
            this.newNombre = this.usuarios[index].nombre
            this.newEdad = this.usuarios[index].edad
            this.newTelefono = this.usuarios[index].telefono
            this.newCorreo = this.usuarios[index].correo
            this.newClave = this.usuarios[index].clave
            localStorage.setItem('myData' ,JSON.stringify(this.usuarios));
        },
        eliminar: function(index){
           this.usuarios.splice(index, 1)
           localStorage.setItem('myData' ,JSON.stringify(this.usuarios));
        }
        
    }, 
    create: function(){
        var object = JSON.parse(localStorage.getItem('myData'));
        

    }
})

