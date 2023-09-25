import DropMenu from '@/components/DropMenu'


export default function Conta({ conta }) {
    const { nome } = conta
    return (
        <div id="data-row" className="flex items-center justify-between p-2 my-1 rounded cursor-pointer hover:bg-slate-800">
            <div className="flex gap-1">
                <span>{nome}</span>
            </div>
            <div className='flex items-center'>
                <span> {nome} </span>
                <DropMenu conta={conta} />
            </div>
        </div>
    )
}