```js
const list = [
        {
          name: "task 1",
          tasks: [
            {
              name: "task 2",
              tasks: [
                {
                  name: "task 7",
                  tasks: []
                },
                {
                  name: "task 8",
                  tasks: []
                }
              ]
            },
            {
              name: "task 6",
              tasks: []
            }
          ]
        },
        {
          name: "task 3",
          tasks: [
            {
              name: "task 4",
              tasks: []
            }
          ]
        },
        {
          name: "task 5",
          tasks: []
        }
      ]

JSON.stringify(this.value, null, 2)
```