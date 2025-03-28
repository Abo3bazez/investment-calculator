import { calculateInvestmentResults, formatter } from "../util/investment";
export default function Result({ userData }) {
  let result = calculateInvestmentResults(userData);
  // #TODO Add Duration Validation
  const initialInvestment =
    result[0].valueEndOfYear - result[0].interest - result[0].annualInvestment;
  console.log(result);
  return (
    <>
      <table id="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest Per Year</th>
            <th>Total Intreset</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {result.map((period) => {
            const totalIntreset =
              period.valueEndOfYear -
              period.annualInvestment * period.year -
              initialInvestment;
            const totalAmountInvested = period.valueEndOfYear - totalIntreset;
            return (
              <tr key={period.year}>
                <td>{period.year}</td>
                <td>{formatter.format(period.valueEndOfYear)}</td>
                <td>{formatter.format(period.interest)}</td>
                <td>{formatter.format(totalIntreset)}</td>
                <td>{formatter.format(totalAmountInvested)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
