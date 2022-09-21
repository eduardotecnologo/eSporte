import { MagnifyingGlassPlus} from 'phosphor-react'

import './styles/main.css'; 
import logoImg from './assets/logo.svg'

function App() {
  return(
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} alt="" />

      <h1 className="text-6xl text-white font-black mt-20">Seu 
        <span className="text-transparent bg-eSport-gradient bg-clip-text">duo</span> 
          está aqui!</h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/game01.png" alt="" />
            <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
              <strong className="text-white font-bold block">Leag of legend</strong>
              <span className="text-zinc-300 text-sm block">4 anúncios</span>
            </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/game02.png" alt="" />
            <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
              <strong className="text-white font-bold block">DOTA 2</strong>
              <span className="text-zinc-300 text-sm block">4 anúncios</span>
            </div>
        </a>  
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/game04.png" alt="" />
            <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
              <strong className="text-white font-bold block">Counter Strike</strong>
              <span className="text-zinc-300 text-sm block">4 anúncios</span>
            </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/game05.png" alt="" />
            <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
              <strong className="text-white font-bold block">Apex</strong>
              <span className="text-zinc-300 text-sm block">4 anúncios</span>
            </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/game06.png" alt="" />
            <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
              <strong className="text-white font-bold block">Fortinite</strong>
              <span className="text-zinc-300 text-sm block">4 anúncios</span>
            </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/game07.png" alt="" />
            <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
              <strong className="text-white font-bold block">Word WarCraft</strong>
              <span className="text-zinc-300 text-sm block">4 anúncios</span>
            </div>
        </a>
      </div>

      <div className="pt-1 bg-eSport-gradient mt-8 self-stretch rounded-lg overflow-hidden">
        <div className="bg-[#2A2634] px-8 py-6 flex justify-between items-center">
          <div>
            <strong className="text-2xl text-white font-bold block">Não encontrou seu duo?</strong>
            <span className="text-zinc-400 text-sm block">Publique um anúncio para encontrar novos players!</span>
          </div>
          <button className="py-3 px-4 bg-violet-500 hover:bg-violet-700 text-white rounded flex items-center gap-3">
            <MagnifyingGlassPlus size={24}/>
            Publicar anúncio
          </button>
        </div>
      </div>
  </div>
  )
}

export default App;