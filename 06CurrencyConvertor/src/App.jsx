import { useState } from 'react'

import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  const [amount,setAmount] =useState(0)
  const [from,setFrom] =useState("usd")
  const [To,setTo] =useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currentInfo = useCurrencyInfo(from)

  const options = Object.keys(currentInfo)

  const swap = () =>{
    setFrom(To)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert =() =>{
    setConvertedAmount(amount * currentInfo(To));
  }

  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('https://images.pexels.com/photos/318820/pexels-photo-318820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                       convert()
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount={amount}
                            CurrencyOptions={options}
                            onCurrencyChange={(Currency)=> setAmount(amount)}
                            selectCurrency={from}
                            onAmountChange={(amount)=> setAmount(amount)}
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            amount={convertedAmount}
                            CurrencyOptions={options}
                            onCurrencyChange={(Currency) =>setFrom(Currency)}
                            selectCurrency={To}
                            amountDisable
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {from.toUpperCase()} to {To.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>
);
                  }

export default App
