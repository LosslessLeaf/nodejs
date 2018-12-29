var events = require("events");
var util = require("util");

var Person = function(name) {
    this.name = name;
};



util.inherits(Person, events.EventEmitter);

var joe = new Person("Joe");
var mike = new Person("Mike");
var ryu = new Person("Ryu");
var ken = new Person("Ken");

var people = [joe, mike, ryu, ken];

people.forEach(person => {
    person.on("speak", message => {
        console.log(`${person.name} said ${message}`);
    });
});

joe.emit("speak", "sup peeps");

ryu.emit("speak", "I hate you all");