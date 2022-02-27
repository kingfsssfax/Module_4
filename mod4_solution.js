var names = ["Yaakov", "John", "Joe"];

function sayHello(name) {
    console.log("hello " + name);
}

function sayGoodBye(name) {
    console.log("Good_bye " + name);
}

function first_letter(name) {
    return name.charAt(0).toUpperCase();
}
for (var name in names) {
    if (first_letter(names[name]) == 'J') {
        sayGoodBye(names[name]);
    } else sayHello(names[name]);
}