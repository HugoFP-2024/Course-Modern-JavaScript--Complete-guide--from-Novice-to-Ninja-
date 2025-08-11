- Primitives vs Reference Types:

Primitive types (Number, String, Boolean, null, undefined, Symbol, BigInt) are stored directly in the stack, and variables hold the actual value. Reference types (Objects, Arrays, Functions, etc.) are stored in the heap, but variables hold a reference (pointer) to the location in the heap. The reference itself is stored in the stack. When you access a reference type variable, JavaScript uses the reference in the stack to find the actual object in the heap.

- The DOM (Document Object Model):

The DOM represents an HTML (or XML) document as a tree-like structure, where the 'document' is the root node, with its children, for example, the 'html' element, which has its own children, like a 'div' or an 'h1'. With this structure, we can access specific parts of our document and manipulate them as we want. In your browser, you can access the 'document' object through the console and check some of its available methods.

- The Window Object:

The window object is the global object in client-side JavaScript, representing the browser's window. It acts as the top-level object in the browser's JavaScript object hierarchy. All global variables, functions, and objects automatically become properties and methods of the window object. For example, if you declare a global variable let myVar = 'hello';, you can access it using window.myVar.

The window object provides access to browser-specific functionalities, such as the browser's dimensions (window.innerWidth, window.innerHeight), and methods to interact with the browser, like window.alert() or window.open(). The Document Object Model (DOM), which is accessed through the document object, is also a property of the window object (window.document).