// Variable Scope

// 1. Global Scope:
// Variables declared outside any function or block are in the global scope.
// They can be accessed from anywhere in the code.
let globalVar = "I'm global";

// 2. Local Scope:
// Variables declared with 'let' or 'const' inside a block (e.g., if, for, while) are scoped to that block.
// They cannot be accessed outside the block.
if (true) {
    let blockLet = "I'm block scoped";
    const blockConst = "I'm also block scoped";
    // blockLet and blockConst are accessible here and in subsequent functions
}
// blockLet and blockConst are NOT accessible here

// Summary:
// - 'let' and 'const' are block scoped.
// - Global variables are accessible everywhere.
// - Inner functions can access variables from their parent scope (lexical scope).
