import useLocalStorage from "./useLocalStorage";
import useLogger from "./useLogger";

export const CustomHook = () => {
  const [name, setName] = useLocalStorage("name", "");
  useLogger(name);

  return (
    <main>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </main>
  );
}