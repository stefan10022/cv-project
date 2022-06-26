import NameForm from "./components/NameForm";
import EmailForm from "./components/EmailForm";
import PhoneForm from "./components/PhoneForm";

function App() {
  return (
    <div className="App">
      <h1>CV Application</h1>
      <NameForm></NameForm>
      <EmailForm></EmailForm>
      <PhoneForm></PhoneForm>
    </div>
  );
}

export default App;
