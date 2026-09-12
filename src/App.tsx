import { Suspense, useState } from "react";
import Banner from "./components/Banner"
import Nav from "./components/Nav"
import Technologies from "./components/technologies/Technologies";
import Loading from "./utils/loading";
import type { TechnologyType } from "./types/TechnologyType";

const technologiesFetch = async (): Promise<TechnologyType[]> => {
  const response = await fetch('/data.json');
  const data = await response.json();
  return data;
}

function App() {
  const [technologiesPromise] = useState(() => technologiesFetch());

  return (
    <>
      <div>
        <Nav />
        <Banner />
        <Suspense fallback={<Loading/>}>
          <Technologies technologiesPromise={technologiesPromise} />
        </Suspense>
      </div>
    </>
  )
}

export default App
