https://nodejs.org/dist/latest-v13.x/docs/api/process.html#process_process_argv

The process.argv property returns an array containing the command line arguments passed when the Node.js process was launched. 
The first element will be process.execPath. See process.argv0 if access to the original value of argv[0] is needed. 
The second element will be the path to the JavaScript file being executed. 
The remaining elements will be any additional command line arguments.

```js
// print process.argv
process.argv.forEach((val, index) => {
  console.log(`${index}: ${val}`);
});
```
Launching the Node.js process as:
```
$ node process-args.js one two=three four
```
0: /usr/local/bin/node
1: /Users/mjr/work/node/process-args.js
2: one
3: two=three
4: four
