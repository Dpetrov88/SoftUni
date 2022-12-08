
    function solve() {
        const url = 'https://judgetests.firebaseio.com/schedule/';
        let nameBusStation = '';
        let nextID = 'depot';

        function depart() {
            $('#depart').prop('disabled', true);

            $.get(url + nextID + '.json').then((response)=> {
                //console.log(response);
                nameBusStation = response.name;
                nextID = response.next;
                $('#info').find('span').text('Next stop '+ nameBusStation);
                $('#arrive').prop('disabled', false);
            })
        }
        function arrive() {
            $('#depart').prop('disabled', false);
            $('#arrive').prop('disabled', true);
            $('#info').find('span').text('Arriving at '+ nameBusStation);
        }
        return {
            depart,
            arrive
        };
    }
    let result = solve();
</script>
</body>
</html>