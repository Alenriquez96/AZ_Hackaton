"use client";

function BackToTop() {
  const handleScrollTo: () => void = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      onClick={handleScrollTo}
      className={`rounded-[50%] bg-[#083b44] p-3 shadow-2xl shadow-black z-50 fixed bottom-4 right-6 backdrop-blur-md animate-bounce-short transition-all hover:-translate-y-0.5`}
    >
      Top
    </button>
  );
}

export default BackToTop;
