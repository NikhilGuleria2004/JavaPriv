package bank;

import java.util.Scanner;

public class Main {
    static Scanner sc = new Scanner(System.in);
    public static void main(String[] args){

        //declare variables
        Scanner sc = new Scanner(System.in);
        double balance = 0;

        boolean isRunning = true;

        int choice;

        //display menu
        while(isRunning == true){
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
            case 1 -> ShowBalance((balance));
            case 2 -> balance = balance + deposit();
            case 3 -> balance = balance - withdraw(balance);
            case 4 -> isRunning = false;
            default -> System.out.println("Invalid Choice");
        }
        }

        System.out.println("Thankyou for bearing");        
        sc.close();
    }
    static void ShowBalance(double balance){
        System.out.printf("$%.2f", balance);
        System.out.println();
    }

        //deposit()
    static double deposit(){
        double amount;
        System.out.println("Enter the amount to be deposited: ");
        amount = sc.nextDouble();

        if(amount<0) {
            System.out.println("Amount cannot be 0");
            return 0;
        }
        else return amount;

    }
        //withdraw()
        static double withdraw(double balance){
            double amount;
            System.out.println("Enter the amount to be withdrawn: ");
            amount = sc.nextDouble();

            if(amount> balance){
                System.out.println("The amount withdrawn cannot be higher than the fucking balance!");
                return 0;
            }
            if(amount < 0){
                System.out.println("The entered amount cannot be negative");
                return 0;
            }
            else return amount;
        }

        //exit message.

        ;
}
