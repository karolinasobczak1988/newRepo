using NUnit.Framework;
using TechTalk.SpecFlow;
using MyFirstApp;

namespace MyFirstApp
{
    [Binding]
    public class CalculatorSteps
    {
        private readonly Calculator _calculator = new Calculator();
        private int _firstNumber;
        private int _secondNumber;
        private int _result;

        [Given(@"I have entered (.*) into the calculator")]
        public void GivenIHaveEnteredNumberIntoTheCalculator(int number)
        {
            if (_firstNumber == 0)
                _firstNumber = number;
            else
                _secondNumber = number;
        }

        [When(@"I press add")]
        public void WhenIPressAdd()
        {
            _result = _calculator.Add(_firstNumber, _secondNumber);
        }

        [Then(@"the result should be (.*) on the screen")]
        public void ThenTheResultShouldBeOnTheScreen(int expectedResult)
        {
            Assert.AreEqual(expectedResult, _result);
        }
    }
}
