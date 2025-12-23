import Button from "./components/Button";
import Input from "./components/Input";

function App() {
  const handleClick = () => {
    alert("Кнопка працює!");
  };

  const handleChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <div>
      <Input
        placeholder="Введи текст"
        type="text"
        onChange={handleChange}
      />

      <Button
        text="Натисни"
        type="button"
        onClick={handleClick}
      />
    </div>
  );
}

export default App;
