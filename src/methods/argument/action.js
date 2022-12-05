
class ArgumentAction extends baseAction {

  async executeMethod() {
    let { first_argument,second_argument } = this;
    
    this.setResponse('SUCCESS');
    return `first argument is : ${first_argument} and second argument is: ${second_argument}`;
  };

}
module.exports = ArgumentAction;