class Person {
    constructor(name){
        this._name = name;
    }

    get name(){
        return this._name;
    }
    
    set name(newName){
        newName = newName.trim();
        if(newName === ' '){
            throw 'The name cannot be empty';
        }
        this._name = newName;
    }
}

let person = new Person('Jane Mkuu');
console.log(person._name);

person.name= 'Mutoni wase';
console.log(person.name);