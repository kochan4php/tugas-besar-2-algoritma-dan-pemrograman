import readline from "node:readline";
import { cyan, green, red, yellow, magenta } from "ansis";

const todos = [];
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const addTodo = () => {
  rl.question(cyan("\nMasukkan todo: "), (todo) => {
    todos.push(todo);
    console.log(green("Todo berhasil ditambahkan"));
    menu();
  });
};

const deleteTodo = () => {
  rl.question(cyan("\nMasukkan nomor todo yang akan dihapus: "), (number) => {
    const index = parseInt(number) - 1;

    if (index < 0 || index >= todos.length) {
      console.log(red("Nomor todo tidak valid"));
      menu();
    } else {
      todos.splice(index, 1);
      console.log(green("Todo berhasil dihapus"));
      menu();
    }
  });
};

const viewTodos = () => {
  console.log(cyan("\nDaftar todo hari ini: "));
  todos.forEach((todo, index) => console.log(`${index + 1}. ${todo}`));
  menu();
};

const exitApp = () => {
  console.log(yellow("\nTerima kasih telah menggunakan aplikasi ini"));
  rl.close();
};

const invalidStatement = () => {
  console.log(red("\nPerintah yang anda masukkan tidak valid!"));
  menu();
};

const menu = () => {
  const menuOptions = "\nList perintah yang tersedia: \n- Tambah todo (1) \n- Hapus todo (2) \n- Lihat todo (3) \n- Keluar (4) \n\nSilahkan masukkan perintah: ";
  rl.question(menuOptions, (input) => {
    if (input === "1") return addTodo();
    if (input === "2") return deleteTodo();
    if (input === "3") return viewTodos();
    if (input === "4") return exitApp();
    return invalidStatement();
  });
};

console.log(magenta("============== Aplikasi Todo List ============="));
menu();
