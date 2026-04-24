#include<iostream>
using namespace std;

void ShowBalance(double Balance){
    cout<<Balance<<endl;
}

double DepositMoney(){
    double Amount;
    cout<<"Enter the amount to be deposited: ";
    cin>>Amount;

    if(Amount<0){
        cout<<"The Depositing Amount cannot be below 0"<<endl;
        return 0;
    }
    else return Amount;
}

double WithDrawMoney(double Balance){
    double Amount;
    cout<<"Enter the Amount to be WithDrawn: ";
    cin>> Amount;

    if(Amount<0){
        cout<<"The Withdrawal Amount Cannot Be Below 0"<<endl;
        return 0;
    }
    else if(Amount>Balance){
        cout<<"The Withdrawal amount cannot be more than the Balance"<<endl;
        return 0;
    }
    else return Amount;
}

int main(){
    //declaring variables
    double balance = 0;
    bool isRunning = true;

    //welcome message;

    while(isRunning){
    cout<<"********************"<<endl;
    cout<<"Bank of Bhosda"<<endl;
    cout<<"********************"<<endl;
    cout<<"Choose an option"<<endl;
    cout<<"1. Check Balance"<<endl;
    cout<<"2. Deposit Money"<<endl;
    cout<<"3. Withdraw Money"<<endl;
    cout<<"4. Exit"<<endl;
    cout<<"********************"<<endl;

    int choice;
    cout<<"Enter a choice :";
    cin>>choice;
    cout<<"********************"<<endl;

    switch(choice){
        case 1:
            ShowBalance(balance);
            break;
        case 2:
            balance += DepositMoney();
            break;
        case 3:
            balance -= WithDrawMoney(balance);
            break;
        case 4:
            cout<<"Thanks for Using Bank of Bhosda!"<<endl;
            isRunning = false;
            break;
        default:
            cout<<"Please Enter a valid number"<<endl;
            break;
    }
    cout<<"********************"<<endl;
    }
    



}