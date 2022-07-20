function getAdmins(map) {
    let admins = [];
    for([key, value] of map){
        if(value === 'Admin')
        admins.push(key);
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Arthur', 'Admin');
usuarios.set('Luiz', 'Admin');
usuarios.set('Silva', 'User');
usuarios.set('Borges', 'Admin');

console.log(getAdmins(usuarios));