const createBoard = (rows, columns) => {
    return Array(rows). fill(0).map((_,row) => {
        return Array(columns).fill(0).map((_, column) => {
            return {
                row,
                column,
                opened: false,
                flagged: false,
                mined: false,
                exploded: false,
                nearMines: 0,
            }
        })
    })
}

const spreadMines = (board, minesAmount) => {
    const rows = board.length
    const columns = board[0].length
    let minesPlanted = 0

    while(minesPlanted < minesAmount){
        const rowSel = parseInt(Math.random() * rows, 10)
        const columnSel = parseInt(Math.random() * columns, 10)

        if (!board[rowSel][columnSel].mined) {
            board[rowSel][columnSel].mined = true
            minesPlanted++
        }
    }
}

const createMinedBoard = (rows, columns, minesAmount) => {
    console.log("ta aqui")
    const board = createBoard(rows,columns)
    spreadMines(board, minesAmount)

    return board
}

const cloneBoard = board => {
    return board.map(rows => {
        return rows.map(field => {
            return {...field}
        })
    })
}

getNeighbors = (board, row, column) => {
    const neighbors = []
    const rows = [row - 1, row, row + 1]
    const columns = [column - 1, column, column + 1]

    rows.forEach(r => {
        columns.forEach(c => {
            const diferent = r !== row || c !== column
            const validRow = r > 0 && r < board.lenght  
            const validColumn = c > 0 && c < board[0].lenght  

            if(diferent && validRow && validColumn) {
                neighbors.puch(board[r][c])
            }
        })
    })

    return neighbors

}

const safeNeighborhood = (board, row, column) => {
    const safe = (results, neighbor) => result && !neighbor.mined
    return getNeighbors(board.row.column).reduce(safes,true)
}

const openField = (board, row, column) => {
    const field = board[row][column]
    if(field.oppened){
        field.exploded = true
    }else if(safeNeighborhood(noard,row,column)) {
        getNeighbors(board, row, column)
            .forEach(n => openField(board, n.row, n.column))
    }else {
        const neighbor = getNeighbors(board, row, column)
        field.nearMines = neighbor.
    }
}

export {createMinedBoard}