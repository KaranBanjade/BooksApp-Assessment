Task Overview
    To Create a Module, which rewards Users Referrer whenever a payment has been
    made
        ● Create a users Model ( User)
            ○ Name: string,
            ○ Email: String
            ○ ReferredUser: User ( current model)
            ○ isPaymentMade: Boolean
            ○ TotalEarnings: Number

Create an API, which
    ● Accepts a userId as Request body
    ● Sets isPaymentMade to true
    ● Finds ReferredUser and increments 10 (rupees) to TotalEarnings



Endpoint(local)
    http://localhost:3000/payment-made
Input
raw JSON
    {
    "userid" : "{Mongodb Object ID}"
    }
    
Headers
{
    Content-Type : "application/json"
}

Return
JSON Object
    {
    "message": "Updation Complete",
    "error": ""
    }
