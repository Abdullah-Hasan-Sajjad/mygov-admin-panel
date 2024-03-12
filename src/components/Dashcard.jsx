export default function Dashcard({title, value}){
    return(
        <div id="runningDakHandler" class="bg-white shadow-xl shadow-black/5 ring-1 ring-slate-700/10 w-full text-center rounded-tr-xl rounded-bl-xl">
        <div class="flex flex-col items-center">
            <div class="text-md text-left w-full pl-4 py-3">
                {title}
            </div>
            <div class="text-md text-left w-full pl-4 py-1 bg-[#bcd9c5] rounded-bl-xl" id="runningDakApplication">
                {value}
            </div>
        </div>
    </div>
    );
};