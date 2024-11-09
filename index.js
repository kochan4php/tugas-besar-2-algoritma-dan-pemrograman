import readline from "node:readline";
import { cyan, green, red, yellow, magenta } from "ansis";

const todos = [];
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/**
 * @description Function for add todo
 * @returns {void}
 */
const addTodo = () => {
  rl.question(cyan("\nMasukkan todo: "), (todo) => {
    todos.push(todo);
    console.log(green("Todo berhasil ditambahkan"));
    menu();
  });
};

/**
 * @description Function for delete todo
 * @returns {void}
 */
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

/**
 * @description Function for view todos
 * @returns {void}
 */
const viewTodos = () => {
  console.log(cyan("\nDaftar todo hari ini: "));
  for (let i = 0; i < todos.length; i++) {
    console.log(`${i + 1}. ${todos[i]}`);
  }
  menu();
};

/**
 * @description Function for exit from app
 * @returns {void}
 */
const exitApp = () => {
  console.log(yellow("\nTerima kasih telah menggunakan aplikasi ini"));
  rl.close();
};

/**
 * @description Function for handle invalid statement
 * @returns {void}
 */
const invalidStatement = () => {
  console.log(red("\nPerintah yang anda masukkan tidak valid!"));
  menu();
};

/**
 * @description Function for handle the main menu
 * @returns {void}
 */
const menu = () => {
  const menuOptions = "\nList perintah yang tersedia: \n- Tambah todo (1) \n- Hapus todo (2) \n- Lihat todo (3) \n- Keluar (4) \n\nSilahkan masukkan perintah: ";
  rl.question(menuOptions, (input) => {
    if (input === "1") return addTodo();
    else if (input === "2") return deleteTodo();
    else if (input === "3") return viewTodos();
    else if (input === "4") return exitApp();
    else return invalidStatement();
  });
};

/**
 * @description Run the app
 */
console.log(magenta("============== Aplikasi Todo List ============="));
menu();
