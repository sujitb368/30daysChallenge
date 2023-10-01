### Difference between compiler and interpreter

Compilers and interpreters are both tools used in the process of executing code written in programming languages,

1. **Translation Process:**

   - Compiler: Compilers translate the entire source code of a program into machine code or an intermediate representation in a single step before execution. The resulting binary or intermediate code is then executed separately.
   - Interpreter: Interpreters translate and execute the source code line by line, typically without generating a separate binary or intermediate code. They read, parse, and execute the code sequentially.

2. **Execution Speed:**

   - Compiler: Compiled programs often execute faster because the translation process optimizes the code for the target machine architecture. The entire code is already translated before execution.
   - Interpreter: Interpreted programs may run slower than compiled ones because they perform parsing and execution simultaneously. The code is translated and executed line by line.

3. **Error Handling:**

   - Compiler: Compilers often catch errors during the compilation phase. If there are syntax errors or type mismatches, the compiler reports them before generating the executable code.
   - Interpreter: Interpreters can identify errors at runtime. They execute code until an error is encountered, making it possible to detect and handle errors dynamically.

4. **Portability:**

   - Compiler: Compiled programs are usually specific to the target platform, meaning that separate compilations are required for different architectures or operating systems.
   - Interpreter: Interpreted programs are generally more portable because they rely on the interpreter, which can be implemented for various platforms. The same source code can run on different systems with compatible interpreters.

5. **Memory Usage:**
   - Compiler: Compiled programs tend to have lower memory usage because the entire code is translated before execution, and there's no need to store the source code in memory during execution.
   - Interpreter: Interpreted programs often consume more memory because the source code and data structures used by the interpreter need to be kept in memory throughout the program's execution.

### Js is compiler or intermediate language.

- yes js is interpreted language below are some reason
- Execution Model: Js code is read and executed line by line
- Dynamic Typing: JavaScript variable types are determined at runtime

- Just-In-Time (JIT) Compilation: translate parts of the JavaScript code into machine code at runtime

- Portability: JavaScript code is portable across different platforms and browsers, similar to interpreted languages.

### Js is oops language or not ?

- Yes, JavaScript is an object-oriented programming (OOP) language
