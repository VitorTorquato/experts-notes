import logo from './assets/Logo.svg';

export function App() {

  return (
    <div className='mx-auto max-w-6xl my-12 space-y-6'>
      <img src={logo} alt="NLW expert"/>
      <form className='w-full'>
        <input 
        type="text"  placeholder='Busque suas notas'
        className='w-ful bg-transparent text-3xl font-semibold tracking-tight
        outline-none placeholder:text-slate-500'
        />
        </form>

        <div className='h-px bg-slate-800'/>

        <div className='grid grid-cols-3 gap-6 auto-rows-[250px]'>
        
             <div className='rounded-md bg-slate-700 p-5 space-y-3'>
                    <span className='text-sm font-medium text-slate-300'>Adicionar nota</span>
                    <p className='text-sm leading-6 text-slate-200'>Grave uma nota em audio que será convertido para texto automaticamente </p>
             </div>
             
             <div className='rounded-md bg-slate-800 p-5 space-y-3 overflow-hidden relative'>
                    <span className='text-sm font-medium text-slate-300'>Há 2 dias</span>
                    <p className='text-sm leading-6 text-slate-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, ut. Eos accusantium ab, voluptates, ipsa excepturi exercitationem doloribus reiciendis Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat ipsam vel quaerat animi eos soluta, facilis ullam, accusantium veritatis ipsum hic nulla praesentium! Veritatis, omnis iure? Vitae repellendus amet minima. </p>

                    <div className='absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0'></div>
             </div>
             
             <div className='rounded-md bg-slate-800 p-5 space-y-3 overflow-hidden relative'>
                    <span className='text-sm font-medium text-slate-300'>Há 4 dias</span>
                    <p className='text-sm leading-6 text-slate-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam neque assumenda ut sed illum perferendis distinctio doloribus, </p>
                    <div className='absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0'></div>
             </div>
             
             <div className='rounded-md bg-slate-800 p-5 space-y-3 overflow-hidden relative'>
                    <span className='text-sm font-medium text-slate-300'>Há 4 dias</span>
                    <p className='text-sm leading-6 text-slate-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam neque assumenda ut sed illum perferendis distinctio doloribus, </p>
                    <div className='absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0'></div>
             </div>
             
          
        </div> 
    </div>
  )
}

