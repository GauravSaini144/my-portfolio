import { Meteors } from "./components/magicui/meteors";
import Home from "./Home";
import { DockDemo } from "./Header";
function App() {
  return (
    <div className="relative min-h-screen w-full">
      {/* Stuck Meteor Background */}
      <div className="fixed inset-0 -z-50 pointer-events-none">
        <Meteors number={40} />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        <div className="sticky top-0 h-fit md:top-2 lg:top-2 z-50 "><DockDemo/></div>
        <Home />
      </div>
    </div>
  );
}

export default App;
