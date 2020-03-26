import SudokuInterface from "@/sudoku/SudokuInterface";

export default class Cell {
    public index: number = 0;
    public sudoku: SudokuInterface;
    private active: boolean = false;
    private value: number | null = null;
    private isFixed: boolean = false;
    private variantsList: Set<number> = new Set<number>();
    private userSelectedVariants: Set<number> = new Set<number>();

    constructor(sudoku: SudokuInterface, index: number) {
        this.sudoku = sudoku;
        this.index = index;
    }

    addVariant(variant: number) {
        this.variantsList.add(variant);
    }

    removeVariant(variant: number) {
        this.variantsList.delete(variant);
    }

    hasVariant(variant: number): boolean {
        return this.variantsList.has(variant);
    }

    selectVariant(variant: number) {
        this.userSelectedVariants.add(variant);
    }

    unselectVariant(variant: number) {
        this.userSelectedVariants.delete(variant);
    }

    isVariantSelected(variant: number): boolean {
        return this.userSelectedVariants.has(variant);
    }
}