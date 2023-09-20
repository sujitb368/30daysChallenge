### What is node js?

- Node.js is javascript runtime enviroment built on the V8 JavaScript engine
- Node.js enable JavaScript code to excute outside browser
- Node.js is single-threaded
- Node.js is also non-blocking, which means that it does not wait for I/O operations to complete

### How node js works ?

Node.js work on a single-threaded event loop, efficiently handling asynchronous tasks without blocking. It uses non-blocking I/O to process multiple concurrent requests and events. Node.js are modular, organized into reusable modules using CommonJS. Event-driven architecture allows components to emit and listen for events, making Node.js ideal for real-time applications. Its efficient design makes it a popular choice for scalable and high-performance server-side JavaScript development.
Features of Node.js

- Event-Driven and Non-Blocking: This means that it uses an event loop to handle asynchronous operations efficiently without blocking the execution of other code. When an asynchronous operation, such as reading a file or making a network request, is initiated, Node.js doesn't wait for it to complete. Instead, it registers a callback function and continues to execute other tasks. When the asynchronous operation finishes, the callback is invoked.

- Single-Threaded: Node.js operates on a single-threaded event loop, which allows it to handle many concurrent connections efficiently. The event loop is responsible for managing and dispatching events and I/O operations. While Node.js is single-threaded, it can still handle multiple concurrent requests and events due to its non-blocking nature.

- Modules: Node.js uses a module system to organize code into reusable and maintainable units. CommonJS is the module system used in Node.js, and it allows developers to create separate modules for different parts of their application. Modules can be imported and used in other parts of the code, promoting modularity and reusability.

- Asynchronous Programming: Asynchronous programming is fundamental in Node.js. It allows developers to write code that can handle multiple tasks concurrently. Callback functions are a common way to manage asynchronous operations in Node.js. Developers define callback functions to be executed when an operation is complete, which prevents blocking and keeps the event loop active.

### Architecture of node js?

- Node.js is Single Threaded event based architecture handel by Event Loop
- Non Blocking I/O Model, Node’s Main Thread does not Wait for External Time Consuming Process to Complete. While the Background Thread is Executing the I/O Function, the Main Thread does not wait for this task to complete
- Event Based, Instead of Waiting for I/O Operation
  The Background Thread uses Event Based Approach to Notify Main Thread. Each Async Task consists of some Callback Function associated with it, once the Async Task is Complete, Background Thread raises Event to Notify the Main Thread about the completion of the Async Task. Main Thread might be busy processing some Other Request, Meanwhile the Request waits on the Main Thread, and as soon as Main Thread is free, it takes up the Callback Request for the Further Execution
