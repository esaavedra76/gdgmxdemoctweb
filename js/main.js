console.log('init');

function lut(color) {
    if (color == 0)
        return 'black';
    if (color == 1)
        return '#4F2400';
    if (color == 2)
        return 'red';
    if (color == 3)
        return 'orange';
    if (color == 4)
        return 'yellow';
    if (color == 5)
        return 'green';
    if (color == 6)
        return 'blue';
    if (color == 7)
        return 'purple';
    if (color == 8)
        return 'gray';
    if (color == 9)
        return 'white';

    color -= 100;
    if (color == 0)
        return '#000000';
    if (color == 1)
        return '#222222';
    if (color == 2)
        return '#444444';
    if (color == 3)
        return '#666666';
    if (color == 4)
        return '#777777';
    if (color == 5)
        return '#878787';
    if (color == 6)
        return '#979797';
    if (color == 7)
        return '#bbbbbb';
    if (color == 8)
        return '#c7c7c7';
    if (color == 9)
        return '#ffffff';


    return 'white';
}

window.onload = function () {
    var queryRef = db.collection("matrix");
    queryRef.onSnapshot(function (querySnapshot) {
        querySnapshot.forEach(function (documentSnapshot) {
            let id = documentSnapshot.id;
            let data = documentSnapshot.data();

            let row = data.row;
            let col = data.col;
            let color = data.value;

            let label = null;
            if ('label' in data) {
                label = data.label;
            }

            // console.log(data.updated);
            // console.log(row + ',' + col + ': ' + color);

            let cell_id = 'row' + row + 'col' + col;
            // console.log(cell_id);

            let cell = document.getElementById(cell_id);
            cell.innerHTML = label;
            cell.style.background = lut(color);
        });
    });
};
