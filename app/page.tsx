export default function Home() {

  return (
    <div className="px-5 pt-5">
      <section className="flex items-center flex-1">
            <div className="flex flex-col w-full ">
                <h1 className="text-5xl font-extrabold lg:text-7xl 2xl:text-8xl">
                    <span>
                        Welcome !
                    </span>
                </h1>

                <p className="max-w-3xl mt-6 text-lg text-gray-700 dark:text-white md:text-xl">
                    Hello, welcome to my tracker app. This is a simple finance tracking app where you can log, review, and edit your expenses.
                </p>
                <p className="max-w-3xl mt-6 text-lg text-gray-700 dark:text-white md:text-xl">
                    The dashboard shows all your expenses.
                </p>
                <p className="max-w-3xl mt-6 text-lg text-gray-700 dark:text-white md:text-xl">
                    In the expense page, you can add, edit, delete expenses.
                </p>
                <p className="max-w-3xl mt-6 text-lg text-gray-700 dark:text-white md:text-xl">
                    In the category page, you can add, edit, delete categories.
                </p>
                <p className="max-w-3xl mt-6 text-lg text-gray-700 dark:text-white md:text-xl">
                    The settings page, you can see your user details.
                </p>
            </div>
        </section>
    </div>
  );
}
