const person={
    fullName: function()
    {
        console.log(`Hi my fullname is ${this.firstName}${this.lastName}`)
    }
}
const person1={
    firstName:'Sugu',
    lastName:'maran'
}
person.fullName.call(person1);
//call -It is used to invoke a method with an owner object as an argument.

//apply--We can pass array as an argument.
const brand={
    branding:function(city,)
    {
        console.log(`My bike is ${this.brandName} and its cost is ${this.cost}.Bought in ${city}`)
    }
}
const bikeName={
    brandName:'Royal Enfield',
    cost:150000
}
brand.branding.apply(bikeName,['Trichy']);
console.log(Math.max.apply('',[1,2,56]))

//bind()
const work={
    working:function()
    {
        return `Hi,I am ${this.name} and i am working as a ${this.role}`
    }

}
const empName={
    name:'Sugumaran',
    role:'Full Stack Developer'
}

console.log(val)
const module = {
    x: 42,
    getX: function () {
      return this.x;
    },
  };
  
  const unboundGetX = module.getX;
  console.log(unboundGetX()); // The function gets invoked at the global scope
  // Expected output: undefined
  
  const boundGetX = unboundGetX.bind(module);
  console.log(boundGetX());