import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [monto, setMonto] = useState(""); // Guardamos el monto ingresado por el usuario
  const [porcentaje, setPorcentaje] = useState(""); // Guardamos el factor (0.10 o 0.15)
  const [pay, setPay] = useState("");

  // El resultado se calcula CADA VEZ que el componente se renderiza
  // No necesita un setResultado propio.
  const resultado = Number(monto) * Number(porcentaje) || 0; // Si monto no es un número, resultado será 0;

  return (
    <div className="min-h-screen flex flex-col justify-center items-center gap-6 p-4 md:p-0">
      <div className="max-w-md w-full bg-gray-800 p-6 rounded-lg">
        <div className="text-white text-xl font-bold mb-4">Tip Calculator</div>

        {/* Contenedor Flex para alinear input y select */}
        <div className="flex gap-4">
          {/* Input para el monto */}
          <input
            type="number"
            value={monto}
            onChange={(e) => setMonto((e.target.value))}
            className="w-full p-2 rounded-md border border-white bg-gray-700 text-white"
            placeholder="Amount"
          />

          {/* Select para el porcentaje */}
          <select
            value={porcentaje}
            onChange={(e) => setPorcentaje(Number(e.target.value))}
            className="p-2 rounded-md bg-gray-700 text-white"
          >
            <option value="" hidden disabled>%</option>
            <option value={0.10}>10%</option>
            <option value={0.15}>15%</option>
          </select>
        </div>

        <p className="text-white mt-4 text-lg">Tip: ${resultado.toFixed(2)}</p>
        <p className="text-white mt-4 text-lg">Total: ${(Number(resultado)+ Number(monto)).toFixed(2)}</p>
      </div>
      <div className="max-w-md w-full bg-emerald-800 p-6 rounded-lg">
        <div className="text-white text-xl font-bold mb-4">Split Control</div>
        <input
          type="number"
          value={pay}
          onChange={(e) => setPay(e.target.value)}
          className="w-full p-2 rounded-md border border-white bg-emerald-700 text-white"
          placeholder="Amount Paid"
        />
        <p className="text-white mt-4 text-lg">Living Expenses: ${(Number(pay) * 0.50).toFixed(2)}</p>
        <p className="text-white mt-4 text-lg">Daily Expenses: ${(Number(pay) * 0.30).toFixed(2)}</p>
        <p className="text-white mt-4 text-lg">Savings: ${(Number(pay) * 0.20).toFixed(2)}</p>
      </div>
    </div>
  );
}

export default App
