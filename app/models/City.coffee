class City
    constructor: (@data) ->
        @name=false
        @id=0
    
        for key, value of @data
            this[key] = value
        @data = null

    set: (data) ->
        for key, value of @data
            this[key] = value
        @data = null
        
        
cities = [
    new City { name: 'Atlanta', id: 1}

]

cities = new Array();

cities['Atlanta'] = { id: 1};
cities['Boston'] = { id: 2};
cities['Calgary'] = { id: 3};
cities['Charleston'] = { id: 4};
cities['Chicago'] = { id: 5};
cities['Dallas'] = { id: 6};
cities['Denver'] = { id: 7};
cities['Duluth'] = { id: 8};
cities['El Paso'] = { id: 9};
cities['Helena'] = { id: 10};
cities['Houston'] = { id: 11};
cities['Kansas City'] = { id: 12};
cities['Las Vegas'] = { id: 13};
cities['Little Rock'] = { id: 14};
cities['Los Angeles'] = { id: 15};
cities['Miami'] = { id: 16};
cities['Montreal'] = { id: 17};
cities['Nashville'] = { id: 18};
cities['New Orleans'] = { id: 19};
cities['New York City'] = { id: 20};
cities['Oklahoma City'] = { id: 21};
cities['Omaha'] = { id: 22};
cities['Phoenix'] = { id: 23};
cities['Pittsburgh'] = { id: 24};
cities['Portland'] = { id: 25};
cities['Raleigh'] = { id: 26};
cities['Salt Lake City'] = { id: 27};
cities['San Francisco'] = { id: 28};
cities['Santa Fe'] = { id: 29};
cities['Sault Ste Marie'] = { id: 30};
cities['Seattle'] = { id: 31};
cities['St Louis'] = { id: 32};
cities['Toronto'] = { id: 33};
cities['Vancouver'] = { id: 34};
cities['Washington, DC'] = { id: 35};
cities['Winnipeg'] = { id: 36};

exports.getCities = -> 
    return cities;