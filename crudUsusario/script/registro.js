const registro = new Vue({
    el: '#registro',
    data: {
        registro: 'Registro',
        welcome: 'Welcome to BTA',
        usuarios: [
            {nombre: 'Esteban', edad: 20, telefono: 123, correo:'abc@gmail.com', clave:'admin'}
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
        },
        restriccion: function(){
            if(this.newNombre == '' | this.newEdad == '' | this.newTelefono == '' | this.newNombre == '' | this.newCorreo == '' | this.newClave == ''){
                alert('llenar el campo')
            } else {
                this.agregarUsuario()
            }
        }, 
        login: function(){
            for(i=0; i<this.usuarios.lenght; i++){
                if(this.usuarios.correo == this.correoSesion & this.usuarios.clave == this.claveSesion){
                    console.log("sesion iniciada")
                } else {
                    console.log("Error");
                }
            }
        }
        
    }

    
})