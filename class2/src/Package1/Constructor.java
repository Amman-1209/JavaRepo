package class2.src.Package1;

public class Constructor {
    double length;
    double breadth;
    double height;
    public Constructor() {
        length = 10;
        breadth = 20;
        height = 30;
        System.out.println( "Default Constructor called");
    }
    public Constructor(double length, double breadth, double height) {
        this.length = length;
        this.breadth = breadth;
        this.height = height;
        System.out.println( "Cuboid Constructor called");
    }
    public Constructor(double len){
        length = breadth = height = len;
        System.out.println( "Cube Constructor called");
    }
    public double volume() {
        return length * breadth * height;
    }
}
