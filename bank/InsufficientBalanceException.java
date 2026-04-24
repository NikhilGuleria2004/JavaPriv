package bank;

public class InsufficientBalanceException extends Exception{
    private double amount;
    
    public InsufficientBalanceException(double amount){
        super(String.format("Insufficient Balance. Attempted to withdraw: %.2f", amount));
        this.amount = amount;

    }

    public double getAmount(){
        return amount;
    }
}
