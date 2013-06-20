
/*
 * GET users listing.
 */

/*
var mongoose = require('mongoose')
, Schema = mongoose.Schema;
*/

var Route = require('../app/models/Route');
var City = require('../app/models/City');
//var Graph = require('../app/models/Graph');

//var objTrain = mongoose.model('Train', Schema);


exports.list = function(req, res){

    var cities = City.getCitiesById();
    var routes = Route.getRoutes();
/*
    var tmp = new Object;

    for(x=0;x<routes.length;x++)

    {
        tmp[cities[x+1]] = new Object;
    
    
        for(y=0;y<routes.length;y++)
        {
            if(routes[x][y] !== Infinity && routes[x][y] !== 0) {
                tmp[cities[x+1]][cities[y+1]] = routes[x][y];
            }
            if (y == 35 && routes[x][y] === undefined) { console.log(x);}
        }
    
    }
    console.log(tmp);
*/

    var paths = City.getPaths();
    
    //console.log(paths);    
    /*
var graph = new Graph(paths);

    var current_route = graph.findShortestPath('St Louis', 'Seatlle');
    
    console.log(graph.findShortestPath('Portland', 'Seatlle'));
*/


    var start = 1;
    var end = 6;
    
    // Compute the shortest paths from vertex number 1 to each other vertex
    // in the graph.
    var shortestPathInfo = shortestPath(routes, 36, 0);
 console.log(  shortestPathInfo); 
    // Get the shortest path from vertex 1 to vertex 6.
    var path0to6 = constructPath(shortestPathInfo, end);
    
    console.log('start: '+cities[start+1]);
    
    for(x=0;x<path0to6.length;x++)
    {
        if(x<path0to6.length-1) {
            console.log('next: '+cities[x+1]);
        } else {
            console.log('end: '+cities[x+1]);
        }
    }
    
    console.log(path0to6);
    
    res.render('route_list', { routes: routes } );

   


};


var Graph = (function (undefined) {

	var extractKeys = function (obj) {
		var keys = [], key;
		for (key in obj) {
		    Object.prototype.hasOwnProperty.call(obj,key) && keys.push(key);
		}
		return keys;
	}

	var sorter = function (a, b) {
		return parseFloat (a) - parseFloat (b);
	}

	var findPaths = function (map, start, end, infinity) {
		infinity = infinity || Infinity;

		var costs = {},
		    open = {'0': [start]},
		    predecessors = {},
		    keys;

		var addToOpen = function (cost, vertex) {
			var key = "" + cost;
			if (!open[key]) open[key] = [];
			open[key].push(vertex);
		}

		costs[start] = 0;

		while (open) {
			if(!(keys = extractKeys(open)).length) break;

			keys.sort(sorter);

			var key = keys[0],
			    bucket = open[key],
			    node = bucket.shift(),
			    currentCost = parseFloat(key),
			    adjacentNodes = map[node] || {};

			if (!bucket.length) delete open[key];

			for (var vertex in adjacentNodes) {
			    if (Object.prototype.hasOwnProperty.call(adjacentNodes, vertex)) {
					var cost = adjacentNodes[vertex],
					    totalCost = cost + currentCost,
					    vertexCost = costs[vertex];

					if ((vertexCost === undefined) || (vertexCost > totalCost)) {
						costs[vertex] = totalCost;
						addToOpen(totalCost, vertex);
						predecessors[vertex] = node;
					}
				}
			}
		}

		if (costs[end] === undefined) {
			return null;
		} else {
			return predecessors;
		}

	}

	var extractShortest = function (predecessors, end) {
		var nodes = [],
		    u = end;

		while (u) {
			nodes.push(u);
			predecessor = predecessors[u];
			u = predecessors[u];
		}

		nodes.reverse();
		return nodes;
	}

	var findShortestPath = function (map, nodes) {
		var start = nodes.shift(),
		    end,
		    predecessors,
		    path = [],
		    shortest;

		while (nodes.length) {
			end = nodes.shift();
			predecessors = findPaths(map, start, end);

			if (predecessors) {
				shortest = extractShortest(predecessors, end);
				if (nodes.length) {
					path.push.apply(path, shortest.slice(0, -1));
				} else {
					return path.concat(shortest);
				}
			} else {
				return null;
			}

			start = end;
		}
	}

	var toArray = function (list, offset) {
		try {
			return Array.prototype.slice.call(list, offset);
		} catch (e) {
			var a = [];
			for (var i = offset || 0, l = list.length; i < l; ++i) {
				a.push(list[i]);
			}
			return a;
		}
	}

	var Graph = function (map) {
		this.map = map;
	}

	Graph.prototype.findShortestPath = function (start, end) {
		if (Object.prototype.toString.call(start) === '[object Array]') {
			return findShortestPath(this.map, start);
		} else if (arguments.length === 2) {
			return findShortestPath(this.map, [start, end]);
		} else {
			return findShortestPath(this.map, toArray(arguments));
		}
	}

	Graph.findShortestPath = function (map, start, end) {
		if (Object.prototype.toString.call(start) === '[object Array]') {
			return findShortestPath(map, start);
		} else if (arguments.length === 3) {
			return findShortestPath(map, [start, end]);
		} else {
			return findShortestPath(map, toArray(arguments, 1));
		}
	}

	return Graph;

})();





/*
 * dijkstra.js
 *
 * Dijkstra's single source shortest path algorithm in JavaScript.
 *
 * Cameron McCormack <cam (at) mcc.id.au>
 *
 * Permission is hereby granted to use, copy, modify and distribute this
 * code for any purpose, without fee.
 *
 * Initial version: October 21, 2004
 */

function shortestPath(edges, numVertices, startVertex) {
  var done = new Array(numVertices);
  done[startVertex] = true;
  var pathLengths = new Array(numVertices);
  var predecessors = new Array(numVertices);
  for (var i = 0; i < numVertices; i++) {
    pathLengths[i] = edges[startVertex][i];
    if (edges[startVertex][i] != Infinity) {
      predecessors[i] = startVertex;
    }
  }
  pathLengths[startVertex] = 0;
  for (var i = 0; i < numVertices - 1; i++) {
    var closest = -1;
    var closestDistance = Infinity;
    for (var j = 0; j < numVertices; j++) {
      if (!done[j] && pathLengths[j] < closestDistance) {
        closestDistance = pathLengths[j];
        closest = j;
      }
    }
    done[closest] = true;
    for (var j = 0; j < numVertices; j++) {
      if (!done[j]) {
        var possiblyCloserDistance = pathLengths[closest] + edges[closest][j];
        if (possiblyCloserDistance < pathLengths[j]) {
          pathLengths[j] = possiblyCloserDistance;
          predecessors[j] = closest;
        }
      }
    }
  }
  return { "startVertex": startVertex,
           "pathLengths": pathLengths,
           "predecessors": predecessors };
}

function constructPath(shortestPathInfo, endVertex) {
  var path = [];
  while (endVertex != shortestPathInfo.startVertex) {
    path.unshift(endVertex);
    endVertex = shortestPathInfo.predecessors[endVertex];
  }
  return path;
}