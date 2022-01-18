import { Navbar, Footer, Services, Welcome } from "./components";

const App = () => {
  return (
    <div className="min-h-screen">
      <div className="bg-welcome">
         <Navbar />
         <Welcome />
      </div>
      <Services />
      <Footer />
    </div>
  )
}

export default App;
