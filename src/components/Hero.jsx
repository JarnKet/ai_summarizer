import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="sumz_logo" className="w-28 object-contain" />
        <button
          type="button"
          onClick={() => {
            window.open("https://github.com/jarnket");
          }}
          className="black_btn"
        >
          GitHub
        </button>
      </nav>
      <h1 className="head_text font-notoLao">
        ສະຫຼຸບໃຈຄວາມສຳຄັນ ຂອງບົດຄວາມດ້ວຍ <br />
        <span className="orange_gradient">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc font-notoLao">
        ເຮັດໃຫ້ການອ່ານເປັນເລື່ອງງ່າຍ ດ້ວຍເຄື່ອງມືສະຫຼຸບຫຍໍ້ ແລະ ຫາໃຈຄວາມສຳຄັນ
        ທີ່ປ່ຽນບົດຄວາມທີ່ຍາວ ໃຫ້ເປັນໃຈຄວາມທີ່ສັ້ນ ແລະ ອ່ານງ່າຍ.
      </h2>
    </header>
  );
};

export default Hero;
