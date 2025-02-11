 
import AnimatedCounter from "./AnimatedCounter"
import DoughnuChart from "./DoughnuChart"
const TotalBalanceBox = ({
    accounts = [], totalBanks, totalCurrentBalance
} : TotlaBalanceBoxProps) => {
  return (
    <section className="total-balance">
        <div className="total-balance-chart">
            <DoughnuChart accounts={accounts}/> 
            <div className=" flex-col gap-6">
                <h2 className="header-2">
                    Bank Accounts: {totalBanks}
                </h2>
            </div>
            <div className="flex flex-col gap-2">
                <div className="total-balance-amount flex-center gap-2">
                   <AnimatedCounter amount={totalCurrentBalance}/>

                </div>
            </div>
        </div>
    </section>
  )
}

export default TotalBalanceBox
