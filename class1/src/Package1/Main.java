package Package1;

public class Main {
    public static void main(String[] args) {
        Student student = new Student();
        student.age = 20;
        // student.name = "Aman"; cannot access cause it is private
        student.address = "Kathmandu";
        student.email = "aman@123.com";
    }
}
