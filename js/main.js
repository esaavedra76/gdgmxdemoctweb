console.log('init');

function lut(color) {
    if(color == 0)
        return 'white';
    if(color == 1)
        return 'red';
    if(color == 2)
        return 'orange';
    if(color == 3)
        return 'yellow';
    if(color == 4)
        return 'green';
    if(color == 5)
        return 'blue';
    if(color == 6)
        return 'purple';
    if(color == 7)
        return 'gray';
    return 'black;'
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

            // console.log(data.updated);
            // console.log(row + ',' + col + ': ' + color);

            let cell_id = 'row' + row + 'col' + col;
            // console.log(cell_id);

            let cell = document.getElementById(cell_id);
            // cell.innerHTML = cell_id;
            cell.style.background = lut(color);
        });
    });
};
