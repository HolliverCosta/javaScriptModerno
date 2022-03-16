const user = {
    firstName: 'Holliver',
    lastname: 'costa',
    age: 22,
    skills: ['backend', 'frontend', 'mobile'],
    active: false,
};

const {firstName,skills, ...restoUser} = user;

const [primary, secundary] = skills;

console.log(restoUser);

console.log(primary);
