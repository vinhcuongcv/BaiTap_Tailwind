import React from "react";
import { createRoot } from "react-dom/client";
import { Header } from "./shared/ui/Header";
import { Travel } from "./shared/ui/Travel";
import { Footer } from "./shared/ui/Footer";

const root = createRoot(document.getElementById("app")!);

function App() {
    return (
        <div>
            <Header />
            <Travel />
            <Footer />
        </div>
    );
}

root.render(<App />);