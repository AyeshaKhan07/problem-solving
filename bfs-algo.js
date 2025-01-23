const graph = {
    'A': ['B', 'C'],
    'B': ['A', 'C', 'D', 'E'],
    'C': ['A', 'B', 'D'],
    'D': ['C', 'B', 'E'],
    'E': ['B', 'D']
}

function bfs(start, goal, graph) {
    const queue = [start]
    const visited = { [start]: "None" }

    while (queue.length) {
        const currentNode = queue.shift()
        if (currentNode == goal)
            break

        const adjacentNodes = graph[currentNode]
        for (const node of adjacentNodes) {
            if (!(Object.keys(visited).includes(node))) {
                queue.push(node)
                visited[node] = currentNode
            }
        }
    }

    let currentNode = goal;
    const shortestPath = [currentNode];
    while(currentNode !== start)
        {
            currentNode = visited[currentNode]
            shortestPath.push(currentNode)
        }

    shortestPath.reverse();
    return shortestPath.join(" --> ")
}

console.log(bfs("A", "E", graph))