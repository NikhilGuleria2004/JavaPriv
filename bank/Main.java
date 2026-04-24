package bank;

import java.util.Scanner;

public class Main {
    public static void main(String[] args){

        //declare variables
        Scanner sc = new Scanner(System.in);
        double balance;

        boolean isRunning = true;

        int choice;

        //display menu
        System.out.println("***************");
        System.out.println("Bank of Bhosda");
        System.out.println("***************");
        System.out.println("1. Show Balance");
        System.out.println("2. Deposit");
        System.out.println("3. Withdraw");
        System.out.println("4. Exit");
        System.out.println("***************");

        System.out.println("Enter Your Choice(1-4)");
        choice = sc.nextInt();

        switch(choice){
            case 1 -> System.out.println("Show Balance");
            case 2 -> System.out.println("Deposit");
            case 3 -> System.out.println("Withdraw");
            case 4 -> isRunning = false;
            default -> System.out.println("Invalid Choice");
        }

        //get and process users choice

        //showBalance()

        //deposit()

        //withdraw()

        //exit message.

        sc.close();

    }
}
