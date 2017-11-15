function print(message) {
    var div = document.getElementById('output');

    div.innerHTML = message;
}

var students = [
    {
        name: 'David Good',
        track: 'C#',
        achievement: 21342,
        points: 15342
    },
    {
        name: 'Joe Smith',
        track: 'JavaScript',
        achievement: 2342234,
        points: 7843
    },
    {
        name: 'Bob Jones',
        track: 'Front End Development',
        achievement: 43522,
        points: 5423
    },
    {
        name: 'Fred Johnson',
        track: 'Web Design',
        achievement: 34234,
        points: 3421
    },
];

var html = '';

for (var i = 0; i < students.length; i++) {
    html = html + '<p>';
    
    for (key in students[i]) {
        html = html + key + ': ' + students[i][key] + '<br>';
    }

    html = html + '</p>';
    
}

print(html);