import { component$, useStore, createContextId, Slot, useContextProvider } from "@builder.io/qwik";

export const MyContext = createContextId('qwik-affirmations');

export default component$(() => {
  const state = useStore({
    affirmations: [],
    openModal: false
  });

  useContextProvider(MyContext, state);
  return (
    <>
    {state.openModal && <Modal/>}
    <header>
      <i class="fa-solid fa-plus cursor-pointer"></i>
    </header>
      <main class="flex-1 flex flex-col max-w-[1200px] mx-auto w-full">
        <Slot />
      </main>
      <footer>

      </footer>
    </>
  );
});
