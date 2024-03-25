export default function TestUrl(){
    return <div>URL TEST
        <div>{
        console.log((JSON.parse(localStorage.getItem('userInfo'))).username)
        }</div>
    </div>;
}