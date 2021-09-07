> [Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)

- sessionStorage maintains a separate storage area for each given origin that's available for the duration of the page session (as long as the browser is open, including page reloads and restores).
- localStorage does the same thing, but persists even when the browser is closed and reopened.

## Method
- localStorage.setItem('myCat', 'Tom');
- localStorage.getItem('myCat');
- localStorage.removeItem('myCat');
- localStorage.clear();

## StorageEvent
```js
window.addEventListener('storage', function(e) {
  document.querySelector('.my-key').textContent = e.key;
  document.querySelector('.my-old').textContent = e.oldValue;
  document.querySelector('.my-new').textContent = e.newValue;
  document.querySelector('.my-url').textContent = e.url;
  document.querySelector('.my-storage').textContent = JSON.stringify(e.storageArea);
});
```