const graph = {
    "CAR": [["MED", 3], ["BUC", 5]],
    "MED": [["CAR", 3], ["ARM", 2], ["BUE", 4], ["BOG", 6], ["BUE", 1]],
    "BUC": [["CAR", 5], ["BOG", 3], ["YOP", 4], ["MED", 4]],
    "BOG": [["MED", 6], ["ARM", 8], ["BUC", 3], ["CAL", 2], ["YOP", 3]],
    "ARM": [["MED", 2], ["BOG", 8], ["CAL", 6]],
    "BUE": [["MED", 1], ["CAL", 5], ["PAS", 7]],
    "PAS": [["BUE", 7], ["CAL", 3]],
    "CAL": [["PAS", 3], ["ARM", 6], ["BOG", 2], ["LET", 4], ["YOP", 5], ["BUE", 5]],
    "LET": [["CAL", 4], ["YOP", 3]],
    "YOP": [["BUC", 4], ["CAL", 5], ["LET", 3], ["ARM", 2], ["BOG", 3]]
}

function dijkstra(start, goal, graph) {
    const distances = {};
    for (const node in graph) {
        distances[node] = Infinity; // Initialize all distances to Infinity
    }
    distances[start] = 0;

    /**
     * Priority queue is a queue while elements are sorted based on priority.
     * Here the priority will be the smalled distance, the child with the smallest
     * distance will be considered first.
     */
    const priorityQueue = [[start, 0]], pathTracking = {};

    while (priorityQueue.length) {
        priorityQueue.sort((a, b) => a[1] - b[1])

        const [currentNode, currentNodeWeight] = priorityQueue.shift();

        if (currentNode == goal)
            break

        const childNodes = graph[currentNode]

        for (const [childNode, weight] of childNodes) {
            const distance = distances[currentNode] + weight 

            if (distance < distances[childNode]) {
                distances[childNode] = distance
                pathTracking[childNode] = currentNode
                priorityQueue.push([childNode, distance])
            }

        }
    }

    // If the goal is unreachable
    if (distances[goal] === Infinity) {
        console.log(`No path exists from ${start} to ${goal}`);
        return
    }

    let currentNode = goal, shortestPath = [goal]
    while (currentNode !== start) {
        currentNode = pathTracking[currentNode]
        shortestPath.push(currentNode)
    }


    console.log(`From ${start} to ${goal}`)
    console.log(`Minimum distance:`, distances[goal])
    console.log("Shortest path:", shortestPath.reverse().join(" --> "))
}

dijkstra("BUC", "CAL", graph)