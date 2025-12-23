import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import LenisProvider from "./components/provider/LenisProvider.tsx";
import {AuroraBackground} from "./components/ui/shadcn-io/aurora-background/index.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LenisProvider>
      <AuroraBackground>
        <App />
      </AuroraBackground>
    </LenisProvider>
  </StrictMode>
);
