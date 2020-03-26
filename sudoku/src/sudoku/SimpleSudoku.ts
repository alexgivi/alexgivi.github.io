import SudokuInterface from "@/sudoku/SudokuInterface";
import Cell from "@/sudoku/Cell";

export default class SimpleSudoku implements SudokuInterface {
    public static ROW_LENGTH: number = 9;
    public static CELLS_COUNT: number = SimpleSudoku.ROW_LENGTH * SimpleSudoku.ROW_LENGTH;

    private cells: Cell[];

    constructor() {
        this.cells = [];
        for (let i = 0; i < SimpleSudoku.CELLS_COUNT; i++) {
            this.cells.push(new Cell(this, i))
        }
    }

    static checkIndex(index: number): boolean {
        return false;
    }

    getCell(row: number, column: number): Cell {
        return this.cells[column + row * SimpleSudoku.ROW_LENGTH];
    }

    getCells(): Cell[] {
        return this.cells;
    }

    getFullCellVariants(): number[] {
        return [];
    }
}