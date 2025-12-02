import { Outlet } from "react-router"

function App() {

  return (
    <main
      className="mx-auto mt-4 px-4"
      style={{
        maxWidth: "clamp(400px, 80vw, 1000px)",
      }}
    >
      <header className="flex justify-between">
        <h1 className="text-4xl font-extrabold text-yellow-400">Tudoo</h1>
        <p>Hi {}</p>
        <button className="p-3 shoadow bg-black text-gray-100 rounded-md shadow-sm hover:cursor-pointer" 
          type="button"
          onClick={() => 
            (window.location.href = 'http://localhost:3000/auth/github')
          }>Login with GitHub</button>
      </header>
      <Outlet />
    </main>
  );
}

export default App