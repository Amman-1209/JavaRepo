package class2.src.package2;

import class2.src.Package1.Constructor;

public class Client {
    public static void main(String[] args) {
        Constructor cuboid = new Constructor();
        Constructor cube = new Constructor(10);
        Constructor cuboid2 = new Constructor(10, 20, 30);
        double vol1 = cuboid.volume();
        double vol2 = cube.volume();
        double vol3 = cuboid2.volume();
        System.out.println("Volume of cuboid: " + vol1);
        System.out.println("Volume of cube: " + vol2);
        System.out.println("Volume of cuboid2: " + vol3);

    }
}
