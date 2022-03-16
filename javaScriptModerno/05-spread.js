const user = {
    firstName: 'Holliver',
    lastname: 'costa',
    age: 22,
    skills: ['backend', 'frontend', 'mobile'],
    active: false,
};

const updatedUser = {
    ...user,
    skills: [...user.skills, 'marketing'],
    active: true,
};

console.log(updatedUser);