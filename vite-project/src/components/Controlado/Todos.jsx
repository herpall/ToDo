import CrossIcon from "../icons/CrossIcon"

const Todos = () => {

    

    return (
        <main className="container mx-auto px-4">
            <div className="bg-white rounded-md my-2 [&>article]:p-4">
                <article className="flex gap-4 border-b-2">
                    <button className="inline-block h-3 w-3 rounded-full border-2 mx-2 my-2"></button>
                    <p className="text-gray-600 grow">Complete online JavaScript curse in blueweb</p>
                    <button className="">
                        <CrossIcon />
                    </button>
                </article>
                <article className="flex gap-4 border-b-2">
                    <button className="inline-block h-3 w-3 rounded-full border-2 mx-2 my-2"></button>
                    <p className="text-gray-600 grow">Complete online JavaScript curse in blueweb</p>
                    <button className="">
                        <CrossIcon />
                    </button>
                </article>
                <article className="flex gap-4 border-b-2">
                    <button className="inline-block h-3 w-3 rounded-full border-2 mx-2 my-2"></button>
                    <p className="text-gray-600 grow">Complete online JavaScript curse in blueweb</p>
                    <button className="">
                        <CrossIcon />
                    </button>
                </article>

                <section className="py-4 px-3 flex justify-between">
                    <span className="text-gray-400">5 items left</span>
                    <button className="text-gray-700">Clear completed</button>
                </section>
            </div>


            <section className="container mx-auto mt-8 px-4">
                <div className="bg-white p-4 rounded-md flex justify-around">
                    <button className="hover:text-blue-700">All</button>
                    <button className="hover:text-blue-700">Actives</button>
                    <button className="hover:text-blue-700">Completed</button>
                </div>
            </section>

            <p className="text-center">Drag and drop to reorder list</p>
        </main>
    )
}

export default Todos;