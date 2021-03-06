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

var html = '';

for (var i = 0; i < students.length; i++) {
    html += '<p>';
    
    for (key in students[i]) {
        html += key + ': ' + students[i][key] + '<br>';
    }

    html += '</p>';
    
}

print(html);