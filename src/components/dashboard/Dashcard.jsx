export default function Dashcard({title, value}){
    return(
        <div id="" className="bg-white shadow-xl shadow-black/5 ring-1 ring-slate-700/10 w-full text-center rounded-tr-xl rounded-bl-xl">
        <div className="flex flex-col items-center">
            <div className="text-md text-left w-full pl-4 py-3">
                {title}
            </div>
            <div className="text-md text-left w-full pl-4 py-1 bg-[#bcd9c5] rounded-bl-xl" id="">
                {value}
            </div>
        </div>
    </div>
    );
};