// Задача 1
function parseCount(value) {
   let number = Number.parseFloat(value);
   if (Number.isNaN(number)) {
       throw new Error("Невалидное значение");
   } else {
       return number;
   }
}

function validateCount(value) {
    try {
        return parseCount(value);
    } catch (error) {
        return error;
    }
}

// Задача 2
class Triangle {
    constructor(a,b,c) {
        if (a+b <= c || a+c <= b || b+c <= a) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
        this.a = a;
        this.b = b;
        this.c = c;
    }
    get perimeter() {
        return this.a + this.b + this.c;
    }
    get area () {
        let p = (this.a + this.b + this.c) / 2;
        let s = Math.sqrt (p * (p - this.a) * (p - this.b) * (p - this.c));
        return +s.toFixed(3)
    }
}
function getTriangle(a,b,c) {
    try {
        return new Triangle(a,b,c)
    } catch (error) {
        return {
            get perimeter() {
                return "Ошибка! Треугольник не существует";
            },
            get area() {
                return "Ошибка! Треугольник не существует";
            }
        }
    }
}












