// Задание 1
let user = {
    name: "Anastasiia",
    age: 29,
    email: "anna1.doe@example.com",
   };
   // name: "Anastasiia", age: 29, email: "anna1.doe@example.com",
   
// Задание 2
let user = {
    name: "John Doe",
    age: 25,
    email: "john.doe@example.com",
   };
   // Обновите объект здесь
   user.age = 30;
   user.isAdmin = true;
   console.log(user);
   
// Задание 3
let user = {
    name: "John Doe",
    age: 30,
    email: "john.doe@example.com",
    isAdmin: true,
   };
   // Удалите свойство здесь
   delete user.email;
   console.log(user);

// Задание 4
function transformUser(user) {
    let user1 = new Object();
    user1.name = "John Doe",
    user1.email: "john.doe@example.com",
    return {user1}; // Возвращайте новый объект
   }
   let user = {
    name: "John Doe",
    age: 30,
    email: "john.doe@example.com",
    isAdmin: true,
   };
   let transformedUser = transformUser(user);
   console.log(transformedUser);
// Задание 5
let user = {
    name: "John Doe",
    age: 30,
    email: "john.doe@example.com",
    isAdmin: true,
   };
   // Создайте копию и измените свойство name здесь
   let userCopy = {...user, name: "Jane"}
   console.log(user); // Оригинальный объект
   console.log(userCopy); // Измененная копия
// Задание 6
function filterProperties(obj, keys) {
    let filteredUser = {
        for (let user in users) {
            filteredUser[user] = users[user];
        }
    }
    // Реализуйте фильтрацию здесь
    return {}; // Возвращайте новый объект
   }
   let user = {
    name: "John Doe",
    age: 30,
    email: "john.doe@example.com",
    isAdmin: true,
   };
   let filteredUser = filterProperties(user, ["name", "email"]);
   console.log(filteredUser); /* Ожидаемый результат: { name: "John Doe", email:
   "john.doe@example.com" }*/
   
// Задание 7
function convertUser(user) {
    // Реализуйте преобразование здесь
    return {}; // Возвращайте новый объект
   }
   let user = {
    name: "John Doe",
    age: 30,
    email: "john.doe@example.com",
    isAdmin: true,
   };
   let convertedUser = convertUser(user);
   console.log(convertedUser);
   /* Ожидаемый результат: { profile: { name: "John Doe", age: 30 }, email:
   "john.doe@example.com", isAdmin: true } */
// Задание 8
let user = {
    name: "John Doe",
    email: "john.doe@example.com",
   };
   let details = {
    age: 30,
    isAdmin: true,
   };
   // Объедините объекты здесь
   let mergedUser = { ...user};
   for(let product in details) {
    if (mergedUser[product]) {
        mergedUser[product] += mergedUser[product];
    } else {
        mergedUser[product] = details[product];
    }
   }
   console.log(mergedUser);
   
// Задание 9
let key1 = "name";
let key2 = "price";
let key3 = "category";
let product = {
}
product[key1, key2, key3]; // Создайте объект и добавьте свойства динамически
console.log(product);
