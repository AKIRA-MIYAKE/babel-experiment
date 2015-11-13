import { sum, pi } from './math';

export default class Circle {

  constructor(radius) {
    this.radius = radius;
  }

  circumference() {
    return sum(this.radius, this.radius) * pi;
  }

}
