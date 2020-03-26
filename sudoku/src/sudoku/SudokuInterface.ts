import Cell from "@/sudoku/Cell";

export default interface SudokuInterface {
    getCells(): Cell[];

    getCell(row: number, column: number): Cell;
}