//for in 操作对象的，for of 、forEach操作数组

/**
1. for in
*/
const obj = {
   'a': '1',
   'b': '2'
}
for ( const prop in obj) {
	console.log("obj." + prop + " = " + obj[prop])
}


/**
2. for of
*/
const arr = [{'a':'1'},{'a':'2'}]
for (const item of arr) {
	item.b = '3'
	console.log(item)
}
// { a: '1', b: '3' }
// { a: '2', b: '3' }
// 结合数组解构
const arr3 = [['astr', 'bstr'], ['cstr', 'dstr']]
for (let [a, b] of arr3) {
    console.log(a, b)
}
// astr bstr
// cstr dstr

// for in 与 for of 操作数组的差异
let ar = [ 1, 2, 3, 4, 5 ]
for(let item in ar) {console.log(item)}
// 0
// 1
// 2
// 3
// 4

for(let item of ar) {console.log(item)}
// 1
// 2
// 3
// 4
// 5


// 按顺序上传
async function handleUpload() {
   for (const item of this.fileList) {
     if (item.status !== 'success') {
       let form = new FormData();
       form.append("file", item.raw);
       const result = await this.$networkHandler.sendRequest(ApiEnums.SingleUpload, form);
       item.url = result.url
       item.status = 'success'
     }
   }
}
