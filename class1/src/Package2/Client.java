package Package2;

import Package1.Student;

public class Client extends Student {
    public static void main(String[] args) {
        Client student = new Client();
        student.age = 20;
        // student.name = "Aman"; cannot access cause it is private
        student.address = "Kathmandu"; 
        // student.email = "aman@123.com";
    }
}
