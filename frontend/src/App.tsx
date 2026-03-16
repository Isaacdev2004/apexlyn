import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Platforms from "@/pages/Platforms";
import Solutions from "@/pages/Solutions";
import Trust from "@/pages/Trust";
import Resources from "@/pages/Resources";
import Company from "@/pages/Company";
import Pricing from "@/pages/Pricing";
import Contact from "@/pages/Contact";
import Industries from "@/pages/Industries";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/platforms" component={Platforms} />
      <Route path="/solutions" component={Solutions} />
      <Route path="/industries" component={Industries} />
      <Route path="/trust" component={Trust} />
      <Route path="/resources" component={Resources} />
      <Route path="/company" component={Company} />
      <Route path="/pricing" component={Pricing} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
        <Router />
      </WouterRouter>
    </QueryClientProvider>
  );
}

export default App;
