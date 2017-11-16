function print(message) {
    var outputDiv = document.getElementById('output');

    outputDiv.innerHTML = message;
}

var students = [
    {
        name: 'David Good',
        track: 'C#',
        achievements: 55,
        points: 15342
    },
    {
        name: 'Joe Smith',
        track: 'JavaScript',
        achievements: 34,
        points: 7843
    },
    {
        name: 'Bob Jones',
        track: 'Front End Development',
        achievements: 23,
        points: 5423
    },
    {
        name: 'Fred Johnson',
        track: 'Web Design',
        achievements: 20,
        points: 3421
    },
];


do {
    var command = prompt('Enter Student Name or "quit" to Quit');

    for (var i = 0; i < students.length; i++) {
        var student = students[i];

        if (student.name === command) {
            var html = '<p>Name: ' + student.name + '<br>';
            html += 'Track: ' + student.track + '<br>';
            html += 'Achivements: ' + student.achievements + '<br>';
            html += 'Points: ' + student.points + '</p>'; 
            print(html);
            break;
        }        
    }
    
} while (command.toLowerCase() !== 'quit') 