# is-contained

Check whether one or more values are contained within an interval.


## Installation

```sh
npm i is-contained
```


## Usage

A very common task encountered in programming is checking whether one or more values are contained within an interval. For instance, collision detection in games often involves checking whether a sprite's position lies within a certain hitbox. This package allows you to do all this without the annoying boilerplate.

```js
import isContained from 'is-contained'


isContained(5, min=0) // returns true

isContained(5, min=5) // returns true

isContained(5, min=6) // returns false

isContained(5, min=0, max=4) // returns false

isContained([1, 2, 3], min=0, max=5) // returns true

isContained([1, 2, 8], min=0, max=5) // returns false
```
