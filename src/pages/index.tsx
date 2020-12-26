import Head from "next/head";
import { useContext } from "react";
import NewTodo from "../componets/NewTodo";
import TodoHeader from "../componets/TodoHeader";
import TodosList from "../componets/TodosList";
import { ThemeContext } from "../context/ThemeContext";
import {ThemeContextType} from '../types/ThemeTypes';

const Home: React.FC = (props) => {
  const { darkMode } = useContext(ThemeContext) as ThemeContextType;
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Todo App</title>
      </Head>
      <div className="h-48 sm:-64 md:h-80  bg-white dark:bg-gray-900 ">
        {darkMode == false && (
          <img
            src="/images/bg-desktop-dark.jpg"
            alt="background image"
            className="h-full w-full  object-cover"
          />
        )}
        {darkMode == true && (
          <img
            src="/images/bg-desktop-light.jpg"
            alt="background image"
            className="h-full w-full  object-cover"
          />
        )}
      </div>
      <div className="container mx-auto px-4 py-4 font-josefin-sans ">
        <main className="max-w-xl bg-transparent h-full mx-auto flex flex-col transform  -translate-y-40 md:-translate-y-64 ">
          <TodoHeader />
          <section>
            <NewTodo />
            <TodosList />
          </section>
          <p className="text-gray-700  dark:text-gray-400 font-medium text-lg mx-auto mt-6 mb-6">
            Drag and drop to reorder list
          </p>
        </main>
      </div>
    </>
  );
};

export default Home;
