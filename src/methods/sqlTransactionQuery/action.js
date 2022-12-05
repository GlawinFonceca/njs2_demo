
class SqlTransactionQueryAction extends baseAction {

  async executeMethod() {
    let { user_id,status } = this;
    
    await SQLManager.transaction.start();//Initiate transaction - BEGIN TRANSACTION

    await SQLManager.transaction.doExecute(                 //Executing RAW Query
      `INSERT INTO trans (user_id,status) VALUES(${user_id},${status})`
    );
    await SQLManager.transaction.doExecute(                 //Executing RAW Query
      `UPDATE trans SET status = 19 WHERE user_id = ${user_id}`
    );
    await SQLManager.transaction.doExecute(                 //Executing RAW Query
      "INSERT INTO trans (user_id,status) VALUES(92,7)"
    );
    let res = await SQLManager.transaction.doExecute(       //Executing RAW Query
      "SELECT * FROM trans"
    );
    
    //In case of rollback scenario 
    if (res.length < 10){
      await SQLManager.transaction.rollBack();
    } 

    //In case of Sucess scenario - commiting changes to database.
    await SQLManager.transaction.commit();
    this.setResponse('SUCCESS');
    return {};
  };

}
module.exports = SqlTransactionQueryAction;