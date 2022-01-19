[You’ll see that there are two syntaxes for building types: Interfaces and Types. You should prefer interface. Use type when you need specific features.](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)

## [Interfaces and Types 例子](https://www.typescriptlang.org/play?e=83#example/types-vs-interfaces)
```ts
// They are very similar, and for the most common cases
// act the same.

type BirdType = {
  wings: 2;
};

interface BirdInterface {
  wings: 2;
}

const bird1: BirdType = { wings: 2 };
const bird2: BirdInterface = { wings: 2 };
```


