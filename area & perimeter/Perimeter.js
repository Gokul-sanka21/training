import React from "react";

class Pericircle extends React.Component {
  render() {
    var r = 3;
    const pi = 3.14;
    var area = 2 * pi * r;
    return area;
  }
}
class Perisquare extends React.Component {
  render() {
    var r = 3;
    var area = 4 * r;
    return area;
  }
}
class Perirectangle extends React.Component {
  render() {
    var b = 3;
    var h = 6;
    var area = 2 * (b + h);
    return area;
  }
}
class Peritriangle extends React.Component {
    render() {
      var b = 3;
      var h = 6;
      var w = 2;
      var area = b+h+w;
      return area;
    }
  }
export { Pericircle, Perisquare, Perirectangle,Peritriangle };
