import "./App.css";
import OptionSelection from "./components/OptionSelection";
import { arrayItems } from "./AIOptions";
import Translation from "./components/Tranlation";
import { useState } from 'react';
import { Configuration, OpenAIApi } from "openai";

function App() {
  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_Open_AI_KEY,
  });
  
  const openai = new OpenAIApi(configuration)
  const [option, setOption] = useState({});
  const [input, setInput] = useState("")

  const selectOption = (option) => {
    setOption(option)
  }
  const doStuff = async () => {
    let object = {...option, prompt: input };

    const response = await openai.createCompletion(object);

    console.log(response.data.choices[0].text);

  };

  return <div className="App">
    
    {Object.values(option).length === 0 ? (<OptionSelection arrayItems={arrayItems} selectOption={selectOption}/>) : (<Translation doStuff={doStuff} setInput={setInput}/>)} 
  </div>
}

export default App