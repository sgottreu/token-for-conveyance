var citiesByName = new Array();

citiesByName['Atlanta'] = { id: 1};
citiesByName['Boston'] = { id: 2};
citiesByName['Calgary'] = { id: 3};
citiesByName['Charleston'] = { id: 4};
citiesByName['Chicago'] = { id: 5};
citiesByName['Dallas'] = { id: 6};
citiesByName['Denver'] = { id: 7};
citiesByName['Duluth'] = { id: 8};
citiesByName['El Paso'] = { id: 9};
citiesByName['Helena'] = { id: 10};
citiesByName['Houston'] = { id: 11};
citiesByName['Kansas City'] = { id: 12};
citiesByName['Las Vegas'] = { id: 13};
citiesByName['Little Rock'] = { id: 14};
citiesByName['Los Angeles'] = { id: 15};
citiesByName['Miami'] = { id: 16};
citiesByName['Montreal'] = { id: 17};
citiesByName['Nashville'] = { id: 18};
citiesByName['New Orleans'] = { id: 19};
citiesByName['New York City'] = { id: 20};
citiesByName['Oklahoma City'] = { id: 21};
citiesByName['Omaha'] = { id: 22};
citiesByName['Phoenix'] = { id: 23};
citiesByName['Pittsburgh'] = { id: 24};
citiesByName['Portland'] = { id: 25};
citiesByName['Raleigh'] = { id: 26};
citiesByName['Salt Lake City'] = { id: 27};
citiesByName['San Francisco'] = { id: 28};
citiesByName['Santa Fe'] = { id: 29};
citiesByName['Sault Ste Marie'] = { id: 30};
citiesByName['Seattle'] = { id: 31};
citiesByName['St Louis'] = { id: 32};
citiesByName['Toronto'] = { id: 33};
citiesByName['Vancouver'] = { id: 34};
citiesByName['Washington, DC'] = { id: 35};
citiesByName['Winnipeg'] = { id: 36};

exports.getCitiesByName = function() { return citiesByName; }

var citiesById = new Array();
citiesById[1] ='Atlanta';
citiesById[2] ='Boston';
citiesById[3] ='Calgary';
citiesById[4] ='Charleston';
citiesById[5] ='Chicago';
citiesById[6] ='Dallas';
citiesById[7] ='Denver';
citiesById[8] ='Duluth';
citiesById[9] ='El Paso';
citiesById[10] ='Helena';
citiesById[11] ='Houston';
citiesById[12] ='Kansas City';
citiesById[13] ='Las Vegas';
citiesById[14] ='Little Rock';
citiesById[15] ='Los Angeles';
citiesById[16] ='Miami';
citiesById[17] ='Montreal';
citiesById[18] ='Nashville';
citiesById[19] ='New Orleans';
citiesById[20] ='New York City';
citiesById[21] ='Oklahoma City';
citiesById[22] ='Omaha';
citiesById[23] ='Phoenix';
citiesById[24] ='Pittsburgh';
citiesById[25] ='Portland';
citiesById[26] ='Raleigh';
citiesById[27] ='Salt Lake City';
citiesById[28] ='San Francisco';
citiesById[29] ='Santa Fe';
citiesById[30] ='Sault Ste Marie';
citiesById[31] ='Seattle';
citiesById[32] ='St Louis';
citiesById[33] ='Toronto';
citiesById[34] ='Vancouver';
citiesById[35] ='Washington, DC';
citiesById[36] ='Winnipeg';

exports.getCitiesById = function() { return citiesById; }


var paths = { Atlanta: 
   { Charleston: 2,
     Miami: 5,
     Nashville: 1,
     'New Orleans': 4,
     Raleigh: 2 },
  Boston: { Montreal: 2, 'New York City': 2 },
  Calgary: { Helena: 4, Seattle: 4, Vancouver: 3, Winnipeg: 6 },
  Charleston: { Atlanta: 2, Miami: 4, Raleigh: 2 },
  Chicago: { Duluth: 3, Omaha: 4, Pittsburgh: 3, 'St Louis': 2, Toronto: 4 },
  Dallas: { 'El Paso': 4, Houston: 1, 'Little Rock': 2, 'Oklahoma City': 2 },
  Denver: 
   { Helena: 4,
     'Kansas City': 4,
     'Oklahoma City': 4,
     Omaha: 4,
     Phoenix: 5,
     'Salt Lake City': 3,
     'Santa Fe': 2 },
  Duluth: 
   { Chicago: 3,
     Helena: 6,
     Omaha: 2,
     'Sault Ste Marie': 3,
     Toronto: 6,
     Winnipeg: 4 },
  'El Paso': 
   { Dallas: 4,
     Houston: 6,
     'Los Angeles': 5,
     'Oklahoma City': 5,
     Phoenix: 3,
     'Santa Fe': 2 },
  Helena: 
   { Calgary: 4,
     Denver: 4,
     Omaha: 5,
     'Salt Lake City': 3,
     Seattle: 6,
     Winnipeg: 4 },
  Houston: { Dallas: 1, 'El Paso': 6, 'New Orleans': 3 },
  'Kansas City': { Denver: 4, 'Oklahoma City': 2, Omaha: 1, 'St Louis': 2 },
  'Las Vegas': { 'Los Angeles': 2, 'Salt Lake City': 3 },
  'Little Rock': 
   { Dallas: 2,
     Nashville: 3,
     'New Orleans': 3,
     'Oklahoma City': 2,
     'St Louis': 2 },
  'Los Angeles': { 'El Paso': 6, 'Las Vegas': 2, Phoenix: 3, 'San Francisco': 3 },
  Miami: { Atlanta: 5, Charleston: 4, 'New Orleans': 6 },
  Montreal: 
   { Boston: 2,
     'New York City': 3,
     'Sault Ste Marie': 5,
     Toronto: 3 },
  Nashville: 
   { Atlanta: 1,
     'Little Rock': 3,
     Pittsburgh: 4,
     Raleigh: 3,
     'St Louis': 2 },
  'New Orleans': { Atlanta: 4, Houston: 2, 'Little Rock': 3, Miami: 6 },
  'New York City': { Boston: 2, Montreal: 3, Pittsburgh: 2, 'Washington, DC': 2 },
  'Oklahoma City': 
   { Dallas: 2,
     Denver: 4,
     'Kansas City': 2,
     'Little Rock': 2,
     'Santa Fe': 3 },
  Omaha: { Chicago: 4, Denver: 4, Duluth: 2, Helena: 5, 'Kansas City': 1 },
  Phoenix: { Denver: 5, 'El Paso': 3, 'Los Angeles': 3, 'Santa Fe': 3 },
  Pittsburgh: 
   { Chicago: 3,
     Nashville: 4,
     'New York City': 2,
     Raleigh: 2,
     'St Louis': 5,
     Toronto: 2,
     'Washington, DC': 2 },
  Portland: { 'Salt Lake City': 6, 'San Francisco': 5, Seattle: 1 },
  Raleigh: 
   { Atlanta: 2,
     Charleston: 2,
     Nashville: 3,
     Pittsburgh: 2,
     'Washington, DC': 2 },
  'Salt Lake City': 
   { Denver: 3,
     Helena: 3,
     'Las Vegas': 3,
     Portland: 6,
     'San Francisco': 5 },
  'San Francisco': { 'Los Angeles': 3, Portland: 5, 'Salt Lake City': 5 },
  'Santa Fe': { Denver: 2, 'El Paso': 2, 'Oklahoma City': 3, Phoenix: 3 },
  'Sault Ste Marie': { Duluth: 3, Montreal: 5, Toronto: 2, Winnipeg: 6 },
  Seattle: { Calgary: 4, Helena: 6, Portland: 1, Vancouver: 1 },
  'St Louis': 
   { Chicago: 2,
     'Kansas City': 2,
     'Little Rock': 2,
     Nashville: 2,
     Pittsburgh: 5 },
  Toronto: 
   { Chicago: 4,
     Duluth: 6,
     Montreal: 3,
     Pittsburgh: 2,
     'Sault Ste Marie': 2 },
  Vancouver: { Calgary: 3, Seattle: 1 },
  'Washington, DC': { 'New York City': 2, Pittsburgh: 2, Raleigh: 2 },
  Winnipeg: { Calgary: 6, Duluth: 4, Helena: 4, 'Sault Ste Marie': 6 } };
  
  
exports.getPaths = function() { return paths; }